import { Link, useLocation } from "react-router-dom";

export default function BottomNav() {
  const location = useLocation();

  function isActive(path) {
    return location.pathname === path;
  }

  return (
    <nav className="bottom-nav"
      style={{
        position: "sticky",
        bottom: 0,
        left: 0,
        right: 0,
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "8px",
        padding: "10px 14px",
        background: "rgba(248, 245, 239, 0.96)",
        borderTop: "1px solid #e6ddd0",
        backdropFilter: "blur(10px)",
        zIndex: 20,
      }}
    >
      <Link
        to="/"
        style={{
          textAlign: "center",
          padding: "12px",
          borderRadius: "12px",
          fontWeight: "700",
          background: isActive("/") ? "#1f1f1f" : "transparent",
          color: isActive("/") ? "#fff" : "#5c5348",
        }}
      >
        Feed
      </Link>

      <Link
        to="/saved"
        style={{
          textAlign: "center",
          padding: "12px",
          borderRadius: "12px",
          fontWeight: "700",
          background: isActive("/saved") ? "#1f1f1f" : "transparent",
          color: isActive("/saved") ? "#fff" : "#5c5348",
        }}
      >
        Saved
      </Link>
    </nav>
  );
}