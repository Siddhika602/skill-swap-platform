import "../styles/Stats.css";

function Stats() {
  return (
    <section className="stats-section">
      <div className="stat-card">
        <h2>5000+</h2>
        <p>Active Users</p>
      </div>

      <div className="stat-card">
        <h2>1200+</h2>
        <p>Skills Available</p>
      </div>

      <div className="stat-card">
        <h2>3500+</h2>
        <p>Successful Swaps</p>
      </div>

      <div className="stat-card">
        <h2>50+</h2>
        <p>Communities</p>
      </div>
    </section>
  );
}

export default Stats;