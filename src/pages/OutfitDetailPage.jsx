import { useParams, Link } from "react-router-dom";
import outfits from "../data/outfits";
import useFavorites from "../hooks/useFavorites";

export default function OutfitDetailPage() {
  const { id } = useParams();
  const outfit = outfits.find((item) => item.id === id);
  const { isFavorite, toggleFavorite } = useFavorites();

  if (!outfit) {
    return <h1 style={{ padding: "20px" }}>Outfit not found</h1>;
  }
  const saved = isFavorite(outfit.id);  
  return (
    <div style={{ padding: "24px", maxWidth: "600px", margin: "0 auto" }}>
      <Link
        to="/"
        style={{
          display: "inline-block",
          marginBottom: "20px",
          color: "#8b6f47",
          fontWeight: "600",
        }}
      >
        ← Back to Feed
      </Link>

      <img
        src={outfit.image}
        alt={outfit.name}
        style={{
          width: "100%",
          borderRadius: "20px",
          marginBottom: "20px",
        }}
      />

      <p
        style={{
          fontSize: "0.85rem",
          color: "#8b6f47",
          fontWeight: "600",
          marginBottom: "8px",
          textTransform: "uppercase",
          letterSpacing: "0.5px",
        }}
      >
        {outfit.culture} • {outfit.occasion}
      </p>

      <h1
        style={{
          fontSize: "2rem",
          marginBottom: "16px",
          color: "#1f1f1f",
        }}
      >
        {outfit.name}
      </h1>

      <p
        style={{
          fontSize: "1rem",
          lineHeight: "1.7",
          color: "#5c5348",
          marginBottom: "24px",
        }}
      >
        {outfit.description}
      </p>

      <div style={{ display: "flex", gap: "12px" }}>
        <Link to={`/try-on/${outfit.id}`} style={{ flex: 1 }}>
          <button
            style={{
              width: "100%",
              padding: "14px",
              borderRadius: "12px",
              border: "none",
              background: "#1f1f1f",
              color: "#fff",
              fontWeight: "600",
            }}
          >
            Try On
          </button>
        </Link>

        <button
          type="button"
          onClick={() => toggleFavorite(outfit.id)}
          style={{
            flex: 1,
            padding: "14px",
            borderRadius: "12px",
            border: "1px solid #d9d1c7",
            background: "#f8f5ef",
            color: "#1f1f1f",
            fontWeight: "600",
          }}
        >
          {saved ? "Saved" : "Save"}
        </button>
      </div>
    </div>
  );
}