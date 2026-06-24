import { useParams, Link } from "react-router-dom";
import outfits from "../data/outfits";
import useCloudFavorites from "../hooks/useCloudFavorites";
import { useState, useEffect } from "react";
import useViewHistory from "../hooks/useViewHistory";

export default function OutfitDetailPage() {
  const { id } = useParams();
  const outfit = outfits.find((item) => item.id === id);
  const { isFavorite, toggleFavorite } = useCloudFavorites();
  const { addViewedOutfit } = useViewHistory();
  const [shareMessage, setShareMessage] = useState("");
  
  useEffect(() => {
    if (outfit) {
      addViewedOutfit(outfit.id);
    }
  }, [addViewedOutfit, outfit]);
  
  if (!outfit) {
    return <h1 style={{ padding: "20px" }}>Outfit not found</h1>;
  }

  const saved = isFavorite(outfit.id);
  async function shareOutfit() {
    const outfitUrl = window.location.href;

    const shareData = {
      title: outfit.name,
      text: `Check out this cultural outfit on TMO: ${outfit.name}`,
      url: outfitUrl,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
        setShareMessage("Outfit shared.");
      } else {
        await navigator.clipboard.writeText(outfitUrl);
        setShareMessage("Link copied.");
      }
    } catch {
      setShareMessage("Share cancelled.");
    }
  }
  return (
    <div
      style={{
        padding: "24px",
        paddingBottom: "120px",
        maxWidth: "600px",
        margin: "0 auto",
      }}
    >
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

      <section style={{ marginTop: "24px" }}>
        <h2>History</h2>
        <p>{outfit.history}</p>
      </section>

      <section style={{ marginTop: "20px" }}>
        <h2>Symbolism</h2>
        <p>{outfit.symbolism}</p>
      </section>

      <section style={{ marginTop: "20px" }}>
        <h2>Styling Notes</h2>
        <p>{outfit.styling}</p>
      </section>
      <section
        style={{
          marginTop: "20px",
          padding: "16px",
          borderRadius: "16px",
          background: "#fff3d8",
          border: "1px solid #ead5a8",
        }}
      >
        <h2 style={{ marginTop: 0 }}>Cultural Note</h2>
        <p style={{ color: "#5c5348", lineHeight: "1.7", marginBottom: 0 }}>
          {outfit.culturalNote}
        </p>
      </section>
      <section style={{ marginTop: "20px", marginBottom: "24px" }}>
        <h2>Find Similar Styles</h2>

        <p style={{ color: "#5c5348", lineHeight: "1.7", marginBottom: "12px" }}>
          Explore clothing inspired by this outfit style.
        </p>

        <a
          href={`https://www.google.com/search?tbm=shop&q=${encodeURIComponent(
            outfit.shoppingSearch
          )}`}
          target="_blank"
          rel="noreferrer"
          style={{
            display: "inline-block",
            width: "100%",
            textAlign: "center",
            padding: "14px",
            borderRadius: "12px",
            background: "#fffaf0",
            color: "#1f1f1f",
            border: "1px solid #d9d1c7",
            fontWeight: "700",
            textDecoration: "none",
            boxSizing: "border-box",
          }}
        >
          Search Similar Clothing
        </a>
      </section>

      <div style={{ display: "flex", gap: "12px", marginTop: "24px" }}>
        <Link to={`/try-on/${outfit.id}`} style={{ flex: 1 }}>
          <button
            style={{
              width: "100%",
              padding: "14px",
              borderRadius: "12px",
              border: "none",
              background: "#1f1f1f",
              color: "#fff",
              fontWeight: "700",
              fontSize: "1rem",
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
            fontWeight: "700",
            fontSize: "1rem",
          }}
        >
          {saved ? "Saved" : "Save"}
        </button>
      </div>

      <button
        type="button"
        onClick={shareOutfit}
        style={{
          width: "100%",
          padding: "14px",
          borderRadius: "12px",
          border: "1px solid #d9d1c7",
          background: "#fffaf0",
          color: "#1f1f1f",
          fontWeight: "700",
          fontSize: "1rem",
          marginTop: "12px",
        }}
      >
        Share Outfit
      </button>

      {shareMessage && (
        <p
          style={{
            marginTop: "10px",
            marginBottom: "24px",
            color: "#6f6658",
            textAlign: "center",
            fontWeight: "600",
          }}
        >
          {shareMessage}
        </p>
      )}
    </div>
  );
}
