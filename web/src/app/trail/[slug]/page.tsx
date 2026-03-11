import Link from "next/link";
import { trails } from "../../data/trails";

export default function TrailDetailPage({ params }: { params: { slug: string } }) {
  const trailIndex = trails.findIndex((trail) => trail.slug === params.slug);
  const trail = trails[trailIndex];

  if (!trail) {
    return (
      <div className="page">
        <h1>Trail not found</h1>
        <Link className="btn primary" href="/">Back to results</Link>
      </div>
    );
  }

  return (
    <div>
      <header className="topbar">
        <Link className="btn ghost" href="/">Back</Link>
        <div className="title">{trail.name}</div>
        <div className="actions">
          <Link className="btn ghost" href="/my-hikes">My Hikes</Link>
          <button className="btn ghost" type="button">Save</button>
          <button className="btn primary" type="button">Share</button>
        </div>
      </header>

      <main className="detail">
        <section className="detail-hero">
          <div className="hero-copy">
            <div className="badges">
              <span className="badge">Suggested</span>
              <span className="badge">App Rank #{trailIndex + 1}</span>
              <span className="badge">WTA Rank #{trail.wtaRank}</span>
              <span className="badge">Report {trail.reportAgeDays}d ago</span>
              <span className="badge">Weather {trail.weather}</span>
            </div>
            <h1>{trail.name}</h1>
            <div className="meta">
              Rating {trail.rating} | {trail.miles} mi | {trail.gain} ft | {trail.difficulty} | {trail.time}
            </div>
            <div className="permits">
              <span className="badge">{trail.permit}</span>
              <a className="link" href="#">Get permit</a>
            </div>
          </div>
          <div className="hero-thumb" />
        </section>

        <section className="detail-grid">
          <div className="panel">
            <div className="panel-title">Map + Route</div>
            <div className="route" />
          </div>
          <div className="panel">
            <div className="panel-title">Summary</div>
            <div className="summary">
              <div><strong>Seasonality:</strong> {trail.summary.seasonality}</div>
              <div><strong>Traffic:</strong> {trail.summary.traffic}</div>
              <div><strong>Road access:</strong> {trail.summary.roadAccess}</div>
              <div><strong>Trail type:</strong> {trail.summary.trailType}</div>
              <div><strong>Dog friendly:</strong> {trail.summary.dogFriendly}</div>
            </div>
          </div>
        </section>

        <section className="detail-grid">
          <div className="panel">
            <div className="panel-title">Conditions (from reports)</div>
            <ul className="list">
              {trail.conditions.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="panel">
            <div className="panel-title">Weekend Weather</div>
            <div className="weather">
              {trail.weekendWeather.map((item) => (
                <div className="weather-row" key={item.day}>
                  <div>{item.day}</div>
                  <div>{item.detail}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="panel">
          <div className="panel-title">Why Recommended (Score Breakdown)</div>
          <div className="score-grid">
            {trail.scoreBreakdown.split("|").map((item) => (
              <div key={item.trim()}>{item.trim()}</div>
            ))}
          </div>
          <div className="sources">Sources: WTA (recent reports), NOAA (weather) | App ranking configurable</div>
        </section>
      </main>
    </div>
  );
}
