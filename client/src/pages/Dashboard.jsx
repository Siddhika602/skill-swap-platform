import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/Dashboard.css";

function Dashboard() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const [stats, setStats] = useState({
    total: 0,
    pending: 0,
    accepted: 0,
    rejected: 0,
  });

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.get(
        "http://localhost:5000/api/swap/stats",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setStats(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>👋 Welcome Back</h1>

        <h2>{user?.name}</h2>

        <p>{user?.email}</p>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <h3>📨 Total Requests</h3>
          <h1>{stats.total}</h1>
        </div>

        <div className="stat-card pending-card">
          <h3>🟡 Pending</h3>
          <h1>{stats.pending}</h1>
        </div>

        <div className="stat-card accepted-card">
          <h3>🟢 Accepted</h3>
          <h1>{stats.accepted}</h1>
        </div>

        <div className="stat-card rejected-card">
          <h3>🔴 Rejected</h3>
          <h1>{stats.rejected}</h1>
        </div>
      </div>

      <h2 className="quick-title">
        ⚡ Quick Actions
      </h2>

      <div className="actions-grid">
        <button
          className="action-btn"
          onClick={() => navigate("/explore")}
        >
          🌍 Explore Users
        </button>

        <button
          className="action-btn"
          onClick={() => navigate("/my-requests")}
        >
          📨 My Requests
        </button>

        <button
          className="action-btn"
          onClick={() =>
            navigate("/received-requests")
          }
        >
          📥 Received Requests
        </button>

        <button
          className="action-btn"
          onClick={() => navigate("/profile")}
        >
          👤 Profile
        </button>

        <button
          className="action-btn"
          onClick={() =>
            navigate("/edit-profile")
          }
        >
          ✏️ Edit Profile
        </button>

        <button
          className="logout-btn"
          onClick={handleLogout}
        >
          🚪 Logout
        </button>
      </div>
    </div>
  );
}

export default Dashboard;