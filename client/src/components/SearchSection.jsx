import "../styles/SearchSection.css";

function SearchSection() {
  const skills = [
    "React",
    "Python",
    "Java",
    "UI/UX",
    "Machine Learning",
    "Node.js",
    "MongoDB",
    "DSA",
  ];

  return (
    <section className="search-section">
      <h2>Find Your Perfect Skill Partner</h2>

      <p>
        Search from hundreds of skills and connect with amazing people.
      </p>

      <div className="search-box">
        <input
          type="text"
          placeholder="Search React, Python, UI/UX..."
        />

        <button>Search 🔍</button>
      </div>

      <div className="skill-chips">
        {skills.map((skill, index) => (
          <span key={index}>{skill}</span>
        ))}
      </div>
    </section>
  );
}

export default SearchSection;