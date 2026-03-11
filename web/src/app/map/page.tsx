"use client";

import Link from "next/link";
import { useState } from "react";
import { rankingWeights, trails } from "../data/trails";

export default function MapPage() {
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
      <header className="topbar map">
        <Link className="btn ghost" href="/">Back to Results</Link>
        <div className="map-title">Map View</div>
        <Link className="btn ghost" href="/my-hikes">My Hikes</Link>
      </header>

      <main className="map-layout">
        <aside className="map-panel">
          <div className="panel-title">Filters</div>
          <div className="field">
            <label>
              Difficulty
              <select defaultValue="Moderate">
                <option>Any</option>
                <option>Moderate</option>
                <option>Hard</option>
              </select>
            </label>
          </div>
          <div className="field">
            <label>
              Length (mi)
              <div className="range">
                <input type="number" defaultValue={6} />
                <span>to</span>
                <input type="number" defaultValue={10} />
              </div>
            </label>
          </div>
          <div className="field">
            <label>
              Gain (ft)
              <div className="range">
                <input type="number" defaultValue={2000} />
                <span>to</span>
                <input type="number" defaultValue={3000} />
              </div>
            </label>
          </div>
          <div className="panel-title">Ranking Weights</div>
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
          <button className="btn primary map-search" type="button">Search this area</button>
        </aside>

        <div className="map-canvas">
          {trails.map((trail) => (
            <Link
              href={`/trail/${trail.slug}`}
              key={trail.id}
              className="marker"
              style={{ top: trail.mapPosition.top, left: trail.mapPosition.left }}
              onMouseEnter={(event) =>
                showTooltip(
                  `${trail.name} | ${trail.miles} mi | Report ${trail.reportAgeDays}d | Weather ${trail.weather} | WTA #${trail.wtaRank}`,
                  event.clientX + 12,
                  event.clientY + 12
                )
              }
              onMouseMove={(event) =>
                showTooltip(
                  `${trail.name} | ${trail.miles} mi | Report ${trail.reportAgeDays}d | Weather ${trail.weather} | WTA #${trail.wtaRank}`,
                  event.clientX + 12,
                  event.clientY + 12
                )
              }
              onMouseLeave={hideTooltip}
            >
              {trail.rating.toFixed(1)}
            </Link>
          ))}
        </div>
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
