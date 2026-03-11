import Link from "next/link";
import { bucketList, recentHikes } from "../data/trails";

export default function MyHikesPage() {
  return (
    <div>
      <header className="topbar">
        <Link className="btn ghost" href="/">Back to Results</Link>
        <div className="title">My Hikes</div>
        <div className="actions">
          <Link className="btn ghost" href="/map">Map View &gt;</Link>
        </div>
      </header>

      <main className="page">
        <section className="panel">
          <div className="section-header">
            <h2>Recently Done</h2>
            <div className="hint">Your latest hikes and notes</div>
          </div>
          <div className="recent-grid">
            {recentHikes.map((hike) => (
              <div className="recent-card" key={hike.id}>
                <div className={`thumb ${hike.thumb}`} />
                <div>
                  <div className="trail-title">{hike.name}</div>
                  <div className="trail-meta">{hike.date} | {hike.miles} mi | {hike.gain} ft</div>
                  <div className="trail-icons">
                    {hike.notes.map((note) => (
                      <span className="tag" key={note}>{note}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="panel">
          <div className="section-header">
            <h2>Bucket List (Ranked)</h2>
            <div className="hint">Ranked by your app weights with external rank</div>
          </div>
          <div className="bucket-list">
            {bucketList.map((item) => (
              <div className="bucket-row" key={item.id}>
                {item.appRank}) {item.name} | App Rank #{item.appRank} | WTA #{item.wtaRank}
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
