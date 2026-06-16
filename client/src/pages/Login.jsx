import "../styles/Login.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle Login
  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        formData
      );

      // Save Token
      localStorage.setItem("token", response.data.token);

      // Save User
      localStorage.setItem(
        "user",
        JSON.stringify(response.data.user)
      );

      toast.success("Login Successful 🎉");

      // Redirect to Dashboard
      navigate("/dashboard");
    } catch (error) {
     toast.error(
        error.response?.data?.message || "❌ Login Failed"
      );
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1>Welcome Back 👋</h1>

        <p>Login to continue your SkillSwap journey</p>

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />

        <button onClick={handleSubmit}>
          Login
        </button>

        <span>
          Don't have an account?{" "}
          <Link to="/register">Register</Link>
        </span>
      </div>
    </div>
  );
}

export default Login;