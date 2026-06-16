import "../styles/FeaturedMentors.css";

const mentors = [
  {
    id: 1,
    name: "Aarav Sharma",
    role: "React Developer",
    rating: "4.9",
    skills: ["React", "JavaScript", "Node.js"],
    badge: "Top Mentor",
    image: "https://i.pravatar.cc/300?img=11",
    online: true,
  },
  {
    id: 2,
    name: "Priya Singh",
    role: "UI/UX Designer",
    rating: "4.8",
    skills: ["Figma", "UI Design", "UX"],
    badge: "Design Expert",
    image: "https://i.pravatar.cc/300?img=32",
    online: true,
  },
  {
    id: 3,
    name: "Rahul Verma",
    role: "Python Developer",
    rating: "5.0",
    skills: ["Python", "Django", "AI"],
    badge: "AI Mentor",
    image: "https://i.pravatar.cc/300?img=15",
    online: false,
  },
];

function FeaturedMentors() {
  return (
    <section className="mentors-section">
      <h2>Featured Mentors</h2>

      <p>
        Learn from talented people and exchange skills with the community.
      </p>

      <div className="mentor-grid">
        {mentors.map((mentor) => (
          <div className="mentor-card" key={mentor.id}>
            <div className="mentor-top">
              <div className="image-box">
                <img src={mentor.image} alt={mentor.name} />

                {mentor.online && <span className="online-dot"></span>}
              </div>

              <span className="mentor-badge">
                {mentor.badge}
              </span>
            </div>

            <h3>{mentor.name}</h3>

            <p className="mentor-role">{mentor.role}</p>

            <div className="mentor-skills">
              {mentor.skills.map((skill, i) => (
                <span key={i}>{skill}</span>
              ))}
            </div>

            <div className="mentor-footer">
              ⭐ {mentor.rating}

              <button>View Profile</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturedMentors;