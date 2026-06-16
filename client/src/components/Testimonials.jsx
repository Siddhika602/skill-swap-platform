import "../styles/Testimonials.css";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Frontend Developer",
    text: "SkillSwap helped me learn React while teaching UI Design. Amazing experience!",
  },
  {
    name: "Rahul Verma",
    role: "Python Developer",
    text: "I found incredible mentors and improved my problem-solving skills.",
  },
  {
    name: "Aarav Singh",
    role: "Student",
    text: "The community is supportive and learning through skill exchange is fun.",
  },
];

function Testimonials() {
  return (
    <section className="testimonials">
      <h2>What Our Users Say</h2>
      <p>Real stories from our growing community.</p>

      <div className="testimonial-grid">
        {testimonials.map((item, index) => (
          <div className="testimonial-card" key={index}>
            <div className="stars">⭐⭐⭐⭐⭐</div>

            <p className="review">"{item.text}"</p>

            <h3>{item.name}</h3>

            <span>{item.role}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;