import outfits from "../data/outfits";
import OutfitCard from "../components/OutfitCard";

export default function FeedPage() {
  return (
    <div
      style={{
        padding: "24px 16px 40px",
        maxWidth: "520px",
        margin: "0 auto",
      }}
    >
      <div style={{ marginBottom: "24px" }}>
        <p
          style={{
            fontSize: "0.9rem",
            color: "#8b6f47",
            marginBottom: "8px",
            textTransform: "uppercase",
            letterSpacing: "1px",
            fontWeight: "600",
          }}
        >
          Try Me On
        </p>

        <h1
          style={{
            fontSize: "2.2rem",
            lineHeight: "1.2",
            color: "#1f1f1f",
            marginBottom: "10px",
          }}
        >
          Explore Cultural Fashion
        </h1>

        <p
          style={{
            fontSize: "1rem",
            lineHeight: "1.6",
            color: "#5c5348",
          }}
        >
          Discover beautiful traditional outfits, learn their meaning, and try
          them on through a filter-like virtual experience.
        </p>
      </div>

      {outfits.map((outfit) => (
        <OutfitCard key={outfit.id} outfit={outfit} />
      ))}
    </div>
  );
}