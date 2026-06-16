import { useEffect, useState } from "react";
import axios from "axios";
import "../styles/MyRequests.css";

function MyRequests() {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    fetchRequests();
  }, []);

  const fetchRequests = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.get(
        "http://localhost:5000/api/swap/my-requests",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setRequests(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getStatusClass = (status) => {
    if (status === "accepted") return "accepted";
    if (status === "rejected") return "rejected";
    return "pending";
  };

  return (
    <div className="myrequests-container">
      <h1 className="page-title">
        📨 My Sent Requests
      </h1>

      {requests.length === 0 ? (
        <div className="empty-card">
          <h2>No Requests Yet 😔</h2>
          <p>
            Explore users and send your first
            skill swap request.
          </p>
        </div>
      ) : (
        <div className="request-grid">
          {requests.map((req) => (
            <div
              key={req._id}
              className="request-card"
            >
              <div className="avatar">
                👤
              </div>

              <h2>{req.receiver?.name}</h2>

              <p className="email">
                📧 {req.receiver?.email}
              </p>

              <div className="info-box">
                <p>
                  <strong>
                    🎁 Offered Skill
                  </strong>
                </p>

                <span>{req.offeredSkill}</span>
              </div>

              <div className="info-box">
                <p>
                  <strong>
                    🎯 Wanted Skill
                  </strong>
                </p>

                <span>{req.wantedSkill}</span>
              </div>

              <div
                className={`status ${getStatusClass(
                  req.status
                )}`}
              >
                {req.status.toUpperCase()}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MyRequests;