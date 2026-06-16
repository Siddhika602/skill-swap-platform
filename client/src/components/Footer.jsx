import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <h2>SkillSwap</h2>
          <p>
            Learn, Teach & Grow Together.
            Build meaningful connections through skill exchange.
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <a href="#">Home</a>
          <a href="#">Explore</a>
          <a href="#">Community</a>
          <a href="#">About</a>
        </div>

        <div className="footer-links">
          <h3>Resources</h3>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms</a>
          <a href="#">Support</a>
          <a href="#">Contact</a>
        </div>
      </div>

      <div className="footer-bottom">
        © 2026 SkillSwap. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;