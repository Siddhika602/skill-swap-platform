import "../styles/HowItWorks.css";

function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Create Profile",
      desc: "Sign up and create your personalized profile with your interests.",
      icon: "👤",
    },
    {
      number: "02",
      title: "Add Your Skills",
      desc: "Showcase the skills you can teach and what you want to learn.",
      icon: "💡",
    },
    {
      number: "03",
      title: "Find Skill Partners",
      desc: "Search and connect with like-minded learners and mentors.",
      icon: "🤝",
    },
    {
      number: "04",
      title: "Start Learning",
      desc: "Exchange knowledge, collaborate and grow together.",
      icon: "🚀",
    },
  ];

  return (
    <section className="how-section">
      <h2>How SkillSwap Works</h2>

      <p>
        Learning has never been this easy. Just follow these simple steps.
      </p>

      <div className="steps-grid">
        {steps.map((step) => (
          <div className="step-card" key={step.number}>
            <div className="step-icon">{step.icon}</div>

            <span className="step-number">{step.number}</span>

            <h3>{step.title}</h3>

            <p>{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HowItWorks;