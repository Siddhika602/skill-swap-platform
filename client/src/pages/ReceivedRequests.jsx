import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import "../styles/ReceivedRequests.css";

function ReceivedRequests() {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    fetchRequests();
  }, []);

  const fetchRequests = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.get(
        "http://localhost:5000/api/swap/received",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setRequests(res.data);
    } catch (error) {
      console.log(error);
      toast.error("Failed to fetch requests");
    }
  };

  const acceptRequest = async (id) => {
    try {
      const token = localStorage.getItem("token");

      await axios.put(
        `http://localhost:5000/api/swap/accept/${id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      toast.success("Request Accepted ✅");
      fetchRequests();
    } catch (error) {
      console.log(error);
      toast.error("Failed to accept request");
    }
  };

  const rejectRequest = async (id) => {
    try {
      const token = localStorage.getItem("token");

      await axios.put(
        `http://localhost:5000/api/swap/reject/${id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      toast.success("Request Rejected ❌");
      fetchRequests();
    } catch (error) {
      console.log(error);
      toast.error("Failed to reject request");
    }
  };

  return (
    <div className="received-container">
      <h1 className="received-title">
        📩 Received Requests
      </h1>

      {requests.length === 0 ? (
        <div className="empty-card">
          <h2>No Requests Received 😔</h2>
        </div>
      ) : (
        <div className="received-grid">
          {requests.map((req) => (
            <div
              className="received-card"
              key={req._id}
            >
              <h2>{req.sender?.name}</h2>

              <p className="email">
                📧 {req.sender?.email}
              </p>

              <p>
                <strong>🎁 Offered Skill:</strong>{" "}
                {req.offeredSkill}
              </p>

              <p>
                <strong>🎯 Wanted Skill:</strong>{" "}
                {req.wantedSkill}
              </p>

              <p>
                <strong>Status:</strong>{" "}
                <span className={`status ${req.status}`}>
                  {req.status}
                </span>
              </p>

              {req.status === "pending" && (
                <div className="btn-group">
                  <button
                    className="accept-btn"
                    onClick={() =>
                      acceptRequest(req._id)
                    }
                  >
                    ✅ Accept
                  </button>

                  <button
                    className="reject-btn"
                    onClick={() =>
                      rejectRequest(req._id)
                    }
                  >
                    ❌ Reject
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ReceivedRequests;