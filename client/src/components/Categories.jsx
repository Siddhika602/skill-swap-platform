import "../styles/Categories.css";

const categories = [
  { icon: "💻", title: "Web Development" },
  { icon: "📱", title: "App Development" },
  { icon: "🤖", title: "Artificial Intelligence" },
  { icon: "🎨", title: "UI / UX Design" },
  { icon: "📊", title: "Data Science" },
  { icon: "☁️", title: "Cloud Computing" },
  { icon: "🔒", title: "Cyber Security" },
  { icon: "⚡", title: "DSA" },
];

function Categories() {
  return (
    <section className="categories">
      <h2>Popular Categories</h2>
      <p>Discover trending skills and start learning today.</p>

      <div className="category-grid">
        {categories.map((item, index) => (
          <div className="category-card" key={index}>
            <div className="category-icon">{item.icon}</div>
            <h3>{item.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Categories;