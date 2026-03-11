"use client";

import Link from "next/link";
import { useState } from "react";
import { rankingWeights, trails } from "./data/trails";

const thumbClasses = ["", "alt", "third", "fourth", "fifth"];

export default function Home() {
  const [advancedOpen, setAdvancedOpen] = useState(false);
  const [tooltip, setTooltip] = useState<{
    text: string;
    x: number;
    y: number;
  } | null>(null);

  const showTooltip = (text: string, x: number, y: number) => {
    setTooltip({ text, x, y });
  };

  const hideTooltip = () => setTooltip(null);

  return (
    <div>
      <header className="topbar">
        <div className="brand">
          <div className="logo">TS</div>
          <div>
            <div className="title">Trailseeker</div>
            <div className="subtitle">Seattle | Default: Next weekend</div>
          </div>
        </div>
        <div className="searchbar">
          <input type="text" placeholder="Search trails..." aria-label="Search trails" />
          <button className="btn primary" type="button">Search</button>
        </div>
        <div className="actions">
          <button
            className="btn ghost"
            type="button"
            onClick={() => setAdvancedOpen((open) => !open)}
          >
            {advancedOpen ? "Hide Advanced Filters" : "Advanced Filters"}
          </button>
          <Link className="btn ghost" href="/my-hikes">My Hikes</Link>
          <Link className="btn primary" href="/map">Map View &gt;</Link>
        </div>
      </header>

      <main className="page">
        <section className="filters">
          <div className="filter-row">
            <label>
              Difficulty
              <select defaultValue="Moderate">
                <option>Any</option>
                <option>Easy</option>
                <option>Moderate</option>
                <option>Hard</option>
              </select>
            </label>
            <label>
              Length (mi)
              <div className="range">
                <input type="number" defaultValue={6} />
                <span>to</span>
                <input type="number" defaultValue={10} />
              </div>
            </label>
            <label>
              Gain (ft)
              <div className="range">
                <input type="number" defaultValue={2000} />
                <span>to</span>
                <input type="number" defaultValue={3000} />
              </div>
            </label>
            <label>
              Time (hrs)
              <div className="range">
                <input type="number" defaultValue={4} />
                <span>to</span>
                <input type="number" defaultValue={7} />
              </div>
            </label>
            <label>
              Rating
              <div className="range">
                <input type="number" defaultValue={4} step="0.1" />
                <span>to</span>
                <input type="number" defaultValue={5} step="0.1" />
              </div>
            </label>
            <label>
              Traffic
              <select defaultValue="Moderate">
                <option>Any</option>
                <option>Low</option>
                <option>Moderate</option>
                <option>High</option>
              </select>
            </label>
          </div>

          {advancedOpen ? (
            <div className="advanced">
              <div className="advanced-grid">
                <div className="panel">
                  <div className="panel-title">Date Range</div>
                  <div className="chips">
                    <button className="chip active" type="button">Next weekend</button>
                    <button className="chip" type="button">This weekend</button>
                    <button className="chip" type="button">Pick a day</button>
                  </div>
                  <div className="field">
                    <label>
                      Pick day
                      <input type="date" />
                    </label>
                  </div>
                  <div className="field">
                    <label>
                      Pick weekend (Sat start)
                      <input type="date" />
                    </label>
                  </div>
                </div>
                <div className="panel">
                  <div className="panel-title">Extras</div>
                  <div className="field">
                    <label>
                      Trail Type
                      <select>
                        <option>Any</option>
                        <option>Loop</option>
                        <option>Out and back</option>
                        <option>Point to point</option>
                      </select>
                    </label>
                  </div>
                  <div className="field">
                    <label>
                      Snow Level
                      <select>
                        <option>Any</option>
                        <option>Below 3000 ft</option>
                        <option>3000-5000 ft</option>
                        <option>Above 5000 ft</option>
                      </select>
                    </label>
                  </div>
                  <div className="chips">
                    <button className="chip" type="button">Dogs OK</button>
                    <button className="chip" type="button">Wildflowers</button>
                    <button className="chip" type="button">Waterfalls</button>
                    <button className="chip" type="button">Lake Views</button>
                  </div>
                  <div className="field">
                    <label>
                      Permit Required
                      <select>
                        <option>Any</option>
                        <option>Discover Pass</option>
                        <option>NW Forest Pass</option>
                        <option>National Park Pass</option>
                      </select>
                    </label>
                  </div>
                  <div className="field">
                    <label>
                      Road Access
                      <select defaultValue="Open">
                        <option>Any</option>
                        <option>Open</option>
                        <option>Closed</option>
                        <option>Seasonal</option>
                      </select>
                    </label>
                  </div>
                </div>
                <div className="panel">
                  <div className="panel-title">Ranking Weights (App)</div>
                  <div className="field">
                    <label>
                      Reports vs Weather
                      <input type="range" min="0" max="100" defaultValue={rankingWeights.reportVsWeather} />
                    </label>
                    <div className="tiny">Left = reports heavier | Right = weather heavier</div>
                  </div>
                  <div className="field">
                    <label>
                      Filter match
                      <input type="range" min="0" max="100" defaultValue={rankingWeights.filterMatch} />
                    </label>
                  </div>
                  <div className="field">
                    <label>
                      Conditions
                      <input type="range" min="0" max="100" defaultValue={rankingWeights.conditions} />
                    </label>
                  </div>
                  <div className="field">
                    <label>
                      Ratings
                      <input type="range" min="0" max="100" defaultValue={rankingWeights.ratings} />
                    </label>
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </section>

        <section className="results">
          <div className="section-header">
            <h2>Top Picks (Ranked)</h2>
            <div className="hint">App rank = list order | WTA rank shown on each card | Hover Score for breakdown</div>
          </div>

          {trails.map((trail, index) => (
            <article className="trail-card" key={trail.id}>
              <div className="rank">{index + 1}</div>
              <div className={`thumb ${thumbClasses[index]}`} />
              <div className="trail-main">
                <div className="trail-title">{trail.name}</div>
                <div className="trail-meta">
                  Rating {trail.rating} | {trail.miles} mi | {trail.gain} ft | {trail.difficulty} | WTA #{trail.wtaRank}
                </div>
                <div className="trail-icons">
                  <span className="tag">Time {trail.time}</span>
                  <span className="tag">WX {trail.weather}</span>
                  <span className="tag">Cond {trail.condition}</span>
                  <span className="tag">Report {trail.reportAgeDays}d</span>
                  <span className="tag">Pass {trail.permit}</span>
                </div>
              </div>
              <div className="trail-actions">
                <button
                  className="btn ghost"
                  type="button"
                  onMouseEnter={(event) => showTooltip(trail.scoreBreakdown, event.clientX + 12, event.clientY + 12)}
                  onMouseMove={(event) => showTooltip(trail.scoreBreakdown, event.clientX + 12, event.clientY + 12)}
                  onMouseLeave={hideTooltip}
                >
                  Score (i)
                </button>
                <Link className="btn primary" href={`/trail/${trail.slug}`}>Details</Link>
              </div>
            </article>
          ))}
        </section>
      </main>

      <div
        className={`tooltip ${tooltip ? "show" : ""}`}
        style={{ left: tooltip?.x ?? 0, top: tooltip?.y ?? 0 }}
      >
        {tooltip?.text ?? ""}
      </div>
    </div>
  );
}
