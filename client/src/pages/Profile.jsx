import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function Profile() {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.get(
        "http://localhost:5000/api/auth/profile",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setUser(res.data);
    } catch (error) {
      console.log(error);
      toast.error("Failed to load profile");
    }
  };

  if (!user) {
    return (
      <div style={{ padding: "40px", color: "white" }}>
        Loading...
      </div>
    );
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg,#0f172a,#1e1b4b,#312e81)",
        color: "white",
        padding: "40px",
      }}
    >
      <div
        style={{
          maxWidth: "700px",
          margin: "0 auto",
          background: "rgba(255,255,255,0.08)",
          padding: "30px",
          borderRadius: "20px",
          backdropFilter: "blur(10px)",
        }}
      >
        <div
          style={{
            width: "100px",
            height: "100px",
            borderRadius: "50%",
            background:
              "linear-gradient(#2563eb,#7c3aed)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "40px",
            margin: "0 auto 20px",
          }}
        >
          👤
        </div>

        <h1 style={{ textAlign: "center" }}>
          {user.name}
        </h1>

        <p
          style={{
            textAlign: "center",
            color: "#cbd5e1",
            marginBottom: "30px",
          }}
        >
          {user.email}
        </p>

        <h3>📝 Bio</h3>
        <p>{user.bio || "No bio added"}</p>

        <br />

        <h3>💡 Skills Offered</h3>
        <p>
          {user.skillsOffered?.length
            ? user.skillsOffered.join(", ")
            : "No skills added"}
        </p>

        <br />

        <h3>🎯 Skills Wanted</h3>
        <p>
          {user.skillsWanted?.length
            ? user.skillsWanted.join(", ")
            : "No skills added"}
        </p>

        <br />

        <button
          onClick={() =>
            navigate("/edit-profile")
          }
        >
          ✏️ Edit Profile
        </button>
      </div>
    </div>
  );
}

export default Profile;