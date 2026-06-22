import { useState } from "react";
import useAuth from "../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";

export default function AuthPage() {
  const { user, authLoading, signUp, logIn, logOut } = useAuth();

  const [mode, setMode] = useState("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const returnPath = location.state?.from || "/";

  async function handleSubmit(event) {
    event.preventDefault();
    setMessage("");

    try {
      if (mode === "signup") {
        await signUp(email, password);
        setMessage("Account created successfully.");
      } else {
        await logIn(email, password);
        setMessage("Logged in successfully.");
      }

      setEmail("");
      setPassword("");
      navigate(returnPath);
    } catch (error) {
      setMessage(error.message);
    }
  }

  async function handleLogout() {
    await logOut();
    setMessage("Logged out.");
  }

  if (authLoading) {
    return <p style={{ padding: "20px" }}>Checking account...</p>;
  }

  return (
    <div style={{ padding: "20px", paddingBottom: "110px" }}>
      <h1 style={{ marginBottom: "8px" }}>Account</h1>

      <p style={{ color: "#6f6658", marginBottom: "20px" }}>
        Sign in to save your TMO experience across devices later.
      </p>

      {user ? (
        <section
          style={{
            background: "#fffaf0",
            border: "1px solid #e5d8bd",
            borderRadius: "18px",
            padding: "18px",
          }}
        >
          <h2 style={{ marginTop: 0 }}>You are logged in</h2>

          <p style={{ color: "#5c5348", marginBottom: "16px" }}>
            Email: {user.email}
          </p>

          <button
            type="button"
            onClick={handleLogout}
            style={{
              width: "100%",
              padding: "14px",
              borderRadius: "12px",
              border: "none",
              background: "#1f1f1f",
              color: "#ffffff",
              fontWeight: "700",
              cursor: "pointer",
            }}
          >
            Log Out
          </button>
        </section>
      ) : (
        <form onSubmit={handleSubmit}>
          <div style={{ display: "flex", gap: "10px", marginBottom: "18px" }}>
            <button
              type="button"
              onClick={() => setMode("login")}
              style={{
                flex: 1,
                padding: "12px",
                borderRadius: "999px",
                border: "1px solid #d9d1c7",
                background: mode === "login" ? "#1f1f1f" : "#fffaf0",
                color: mode === "login" ? "#ffffff" : "#1f1f1f",
                fontWeight: "700",
                cursor: "pointer",
              }}
            >
              Login
            </button>

            <button
              type="button"
              onClick={() => setMode("signup")}
              style={{
                flex: 1,
                padding: "12px",
                borderRadius: "999px",
                border: "1px solid #d9d1c7",
                background: mode === "signup" ? "#1f1f1f" : "#fffaf0",
                color: mode === "signup" ? "#ffffff" : "#1f1f1f",
                fontWeight: "700",
                cursor: "pointer",
              }}
            >
              Sign Up
            </button>
          </div>

          <label style={{ display: "block", marginBottom: "12px" }}>
            <span style={{ display: "block", marginBottom: "6px" }}>Email</span>
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
              style={{
                width: "100%",
                padding: "14px",
                borderRadius: "12px",
                border: "1px solid #d9d1c7",
                boxSizing: "border-box",
              }}
            />
          </label>

          <label style={{ display: "block", marginBottom: "18px" }}>
            <span style={{ display: "block", marginBottom: "6px" }}>
              Password
            </span>
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
              minLength={6}
              style={{
                width: "100%",
                padding: "14px",
                borderRadius: "12px",
                border: "1px solid #d9d1c7",
                boxSizing: "border-box",
              }}
            />
          </label>

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "14px",
              borderRadius: "12px",
              border: "none",
              background: "#1f1f1f",
              color: "#ffffff",
              fontWeight: "700",
              cursor: "pointer",
            }}
          >
            {mode === "signup" ? "Create Account" : "Login"}
          </button>
        </form>
      )}

      {message && (
        <p style={{ marginTop: "16px", color: "#6f6658", lineHeight: "1.5" }}>
          {message}
        </p>
      )}
    </div>
  );
}