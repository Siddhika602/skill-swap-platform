import "../styles/Explore.css";
import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

function Explore() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.get(
        "http://localhost:5000/api/auth/users",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("Users API Response:", res.data);

      setUsers(res.data);
    } catch (error) {
      console.log(error);
      toast.error("Failed to load users");
    }
  };

  const handleSwapRequest = async (receiverId) => {
    try {
      const token = localStorage.getItem("token");

      const offeredSkill = prompt(
        "Enter the skill you are offering:"
      );

      if (!offeredSkill) return;

      const wantedSkill = prompt(
        "Enter the skill you want:"
      );

      if (!wantedSkill) return;

      const res = await axios.post(
        "http://localhost:5000/api/swap/send",
        {
          receiver: receiverId,
          offeredSkill,
          wantedSkill,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      toast.success(res.data.message);
    } catch (error) {
      console.log(error);

      toast.error(
        error.response?.data?.message ||
          "Failed to send request"
      );
    }
  };

  const filteredUsers = users.filter((user) => {
    const searchText = search.toLowerCase();

    return (
      user.name.toLowerCase().includes(searchText) ||
      user.skillsOffered?.some((skill) =>
        skill.toLowerCase().includes(searchText)
      ) ||
      user.skillsWanted?.some((skill) =>
        skill.toLowerCase().includes(searchText)
      )
    );
  });

  return (
    <div className="explore-container">
      <h1 className="explore-title">
        🌍 Explore Users
      </h1>

      <input
        className="search-box"
        type="text"
        placeholder="Search by name or skill..."
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
      />

      <div className="users-grid">
        {filteredUsers.length === 0 ? (
          <h2 className="no-users">
            No Users Found 😔
          </h2>
        ) : (
          filteredUsers.map((user) => (
            <div
              className="user-card"
              key={user._id}
            >
              <div className="avatar">
                👤
              </div>

              <h2>{user.name}</h2>

              <p className="email">
                {user.email}
              </p>

              <p className="bio">
                {user.bio ||
                  "No bio available"}
              </p>

              <div className="skills-section">
                <h4>💡 Skills Offered</h4>

                <div className="skills">
                  {user.skillsOffered?.length >
                  0 ? (
                    user.skillsOffered.map(
                      (skill, index) => (
                        <span
                          key={index}
                          className="skill-chip"
                        >
                          {skill}
                        </span>
                      )
                    )
                  ) : (
                    <span className="empty-text">
                      None
                    </span>
                  )}
                </div>
              </div>

              <div className="skills-section">
                <h4>🎯 Skills Wanted</h4>

                <div className="skills">
                  {user.skillsWanted?.length >
                  0 ? (
                    user.skillsWanted.map(
                      (skill, index) => (
                        <span
                          key={index}
                          className="wanted-chip"
                        >
                          {skill}
                        </span>
                      )
                    )
                  ) : (
                    <span className="empty-text">
                      None
                    </span>
                  )}
                </div>
              </div>

              <button
                className="swap-btn"
                onClick={() =>
                  handleSwapRequest(
                    user._id
                  )
                }
              >
                🚀 Send Swap Request
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Explore;