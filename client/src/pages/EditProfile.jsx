import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function EditProfile() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    bio: "",
    skillsOffered: "",
    skillsWanted: "",
    profilePic: "",
  });

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

      setFormData({
        name: res.data.name || "",
        bio: res.data.bio || "",
        skillsOffered: res.data.skillsOffered?.join(", ") || "",
skillsWanted: res.data.skillsWanted?.join(", ") || "",
        profilePic: res.data.profilePic || "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = async () => {
    try {
      const token = localStorage.getItem("token");

      await axios.put(
        "http://localhost:5000/api/auth/profile",
        {
          name: formData.name,
          bio: formData.bio,
          profilePic: formData.profilePic,

          skillsOffered: formData.skillsOffered
  .split(",")
  .map((skill) => skill.trim())
  .filter(Boolean),

          skillsWanted: formData.skillsWanted
            .split(",")
            .map((skill) => skill.trim()),
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      toast.success("Profile Updated Successfully ✅");

      navigate("/profile");
    } catch (error) {
      console.log(error);

      toast.error("Update Failed");
    }
  };

  return (
    <div style={{ padding: "40px" }}>
      <h1>Edit Profile ✨</h1>

      <br />

      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
      />

      <br />
      <br />

      <input
        type="text"
        name="bio"
        placeholder="Bio"
        value={formData.bio}
        onChange={handleChange}
      />

      <br />
      <br />

      <input
        type="text"
        name="skillsOffered"
        placeholder="React, Java, Python"
        value={formData.skillsOffered}
        onChange={handleChange}
      />

      <br />
      <br />

      <input
        type="text"
        name="skillsWanted"
        placeholder="AWS, Docker"
        value={formData.skillsWanted}
        onChange={handleChange}
      />

      <br />
      <br />

      <button onClick={handleSave}>
        Save Changes
      </button>
    </div>
  );
}

export default EditProfile;