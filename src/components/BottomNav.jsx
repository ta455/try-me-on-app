import { Link, useLocation } from "react-router-dom";

const navItems = [
  { label: "Feed", path: "/" },
  { label: "Saved", path: "/saved" },
  { label: "Prefs", path: "/preferences" },
  { label: "About", path: "/about" },
];

export default function BottomNav() {
  const location = useLocation();

  return (
    <nav className="bottom-nav">
      {navItems.map((item) => {
        const isActive = location.pathname === item.path;

        return (
          <Link
            key={item.path}
            to={item.path}
            style={{
              textDecoration: "none",
              color: isActive ? "#ffffff" : "#5f5548",
              background: isActive ? "#1f1f1f" : "transparent",
              padding: "10px 0",
              borderRadius: "14px",
              fontWeight: "700",
              textAlign: "center",
              fontSize: "0.9rem",
            }}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}