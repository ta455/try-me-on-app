import { useState } from "react";
import outfits from "../data/outfits";
import OutfitCard from "../components/OutfitCard";

export default function FeedPage() {
  const [searchText, setSearchText] = useState("");

  const filteredOutfits = outfits.filter((outfit) => {
    const searchableText = [
      outfit.name,
      outfit.culture,
      outfit.occasion,
      outfit.description,
      outfit.history,
      outfit.symbolism,
      outfit.styling,
      outfit.tags.join(" "),
    ]
      .join(" ")
      .toLowerCase();

    return searchableText.includes(searchText.toLowerCase());
  });

  return (
    <div style={{ padding: "20px", paddingBottom: "96px" }}>
      <h1 style={{ marginBottom: "8px" }}>TMO Feed</h1>

      <p style={{ color: "#6f6658", marginBottom: "18px" }}>
        Discover cultural outfits and try them on instantly.
      </p>

      <input
        type="text"
        placeholder="Search outfits, cultures, occasions..."
        value={searchText}
        onChange={(event) => setSearchText(event.target.value)}
        style={{
          width: "100%",
          padding: "14px 16px",
          marginBottom: "20px",
          borderRadius: "999px",
          border: "1px solid #ddd0bd",
          background: "#fffaf0",
          fontSize: "1rem",
          boxSizing: "border-box",
        }}
      />

      {filteredOutfits.length > 0 ? (
        filteredOutfits.map((outfit) => (
          <OutfitCard key={outfit.id} outfit={outfit} />
        ))
      ) : (
        <p style={{ textAlign: "center", color: "#7a7065", marginTop: "40px" }}>
          No outfits found.
        </p>
      )}
    </div>
  );
}