import { Link, useNavigate } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        🚀 SkillSwap
      </div>

      <div className="navbar-links">
        <Link to="/dashboard">Dashboard</Link>

        <Link to="/explore">Explore</Link>

        <Link to="/my-requests">My Requests</Link>

        <Link to="/received-requests">
          Received
        </Link>

        <Link to="/profile">Profile</Link>

        <button
          className="logout-btn"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </nav>
  );
}

export default Navbar;