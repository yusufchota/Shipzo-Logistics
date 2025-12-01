import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext.jsx";

function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("john@example.com");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // fake auth
    login(email);
    navigate("/dashboard");
  };

  return (
    <div className="login-page d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
      <div className="card shadow p-4" style={{ maxWidth: 420, width: "100%" }}>
        <h3 className="fw-bold mb-2 text-center">YAAZ Logistics</h3>
        <p className="text-muted text-center mb-4">
          Sign in to your logistics dashboard
        </p>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              className="form-control"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              className="form-control"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button className="btn btn-primary w-100 mb-3" type="submit">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
