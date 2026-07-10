export default function Home() {
  return (
    <main className="av-main">
      <section className="av-hero">
        <h1>Arcade Vault</h1>
        <p className="sub">
          INSERT COIN <span className="blink">_</span>
        </p>
      </section>

      <div className="av-filters">
        <div className="av-search">
          <span className="ico">&gt;</span>
          <input placeholder="Buscar juego..." />
        </div>
        <div className="av-chips">
          <button className="chip active">TODOS</button>
          <button className="chip">ARCADE</button>
          <button className="chip">PUZZLE</button>
        </div>
      </div>

      <div className="av-grid">
        <article className="card">
          <div className="cover">
            <div className="cover-bg cover-bricks" />
            <span className="label">ARCADE</span>
          </div>
          <div className="meta">
            <span className="title">Brick Breaker</span>
            <span className="desc">Rompe todos los bloques y sube tu puntaje.</span>
          </div>
          <div className="row">
            <span className="score-badge">
              TOP SCORE <b>128.450</b>
            </span>
            <button className="btn">JUGAR</button>
          </div>
        </article>

        <article className="card">
          <div className="cover">
            <div className="cover-bg cover-invaders" />
            <span className="label">ARCADE</span>
          </div>
          <div className="meta">
            <span className="title">Space Invaders</span>
            <span className="desc">Defiende la galaxia de la invasión pixelada.</span>
          </div>
          <div className="row">
            <span className="score-badge">
              TOP SCORE <b>96.200</b>
            </span>
            <button className="btn magenta">JUGAR</button>
          </div>
        </article>

        <article className="card">
          <div className="cover">
            <div className="cover-bg cover-tetro" />
            <span className="label">PUZZLE</span>
          </div>
          <div className="meta">
            <span className="title">Bloques</span>
            <span className="desc">Encaja las piezas antes de que se acaben.</span>
          </div>
          <div className="row">
            <span className="score-badge">
              TOP SCORE <b>54.900</b>
            </span>
            <button className="btn yellow">JUGAR</button>
          </div>
        </article>
      </div>
    </main>
  );
}
