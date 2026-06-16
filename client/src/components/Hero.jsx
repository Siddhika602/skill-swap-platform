import "../styles/Hero.css";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-content">

        <div className="hero-tag">
          🚀 Learn • Teach • Connect
        </div>

        <h1>
          Exchange Skills,
          <br />
          Build Your Future
        </h1>

        <p>
          Connect with talented students and professionals,
          exchange skills, build meaningful connections,
          and grow together in one amazing community.
        </p>

        <div className="hero-buttons">

          <button className="primary-btn">
            Get Started
          </button>

          <button className="secondary-btn">
            Explore Skills
          </button>

        </div>

      </div>

    </section>
  );
}

export default Hero;