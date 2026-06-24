import useCloudFavorites from "../hooks/useCloudFavorites";
import { useState } from "react";
import outfits from "../data/outfits";
import OutfitCard from "../components/OutfitCard";
import usePreferences from "../hooks/usePreferences";
import useViewHistory from "../hooks/useViewHistory";

const filters = ["All", "Cambodia", "Japan", "Korea", "India", "Vietnam", "Nigeria", "China", "Traditional", "Formal", "Ceremonial"]

export default function FeedPage() {
  const [searchText, setSearchText] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");
  const { favoriteIds } = useCloudFavorites();
  const { preferences } = usePreferences();
  const { viewedIds, clearViewHistory } = useViewHistory();

  const favoriteOutfits = outfits.filter((outfit) =>
    favoriteIds.includes(outfit.id)
  );

  const favoriteTags = favoriteOutfits.flatMap((outfit) => outfit.tags);

  const preferenceWords = preferences.map((preference) =>
    preference.toLowerCase().replaceAll(" ", "-")
  );

  const recommendedOutfits = outfits
    .filter((outfit) => !favoriteIds.includes(outfit.id))
    .filter((outfit) => {
      const outfitText = [
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

      const matchesSavedTags = outfit.tags.some((tag) =>
        favoriteTags.includes(tag)
      );

      const matchesPreferences = preferenceWords.some((preference) =>
        outfitText.includes(preference)
      );

      return matchesSavedTags || matchesPreferences;
    })
    .slice(0, 2);

  const recentlyViewedOutfits = viewedIds
    .map((id) => outfits.find((outfit) => outfit.id === id))
    .filter(Boolean);

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

    const matchesSearch = searchableText.includes(searchText.toLowerCase());

    const matchesFilter =
      activeFilter === "All" ||
      searchableText.includes(activeFilter.toLowerCase());

    return matchesSearch && matchesFilter;
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
          marginBottom: "16px",
          borderRadius: "999px",
          border: "1px solid #ddd0bd",
          background: "#fffaf0",
          fontSize: "1rem",
          boxSizing: "border-box",
        }}
      />

      <div
        style={{
          display: "flex",
          gap: "10px",
          overflowX: "auto",
          paddingBottom: "14px",
          marginBottom: "10px",
        }}
      >
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            style={{
              border: "1px solid #d8c7aa",
              borderRadius: "999px",
              padding: "10px 16px",
              whiteSpace: "nowrap",
              background: activeFilter === filter ? "#1f1f1f" : "#fffaf0",
              color: activeFilter === filter ? "#ffffff" : "#3d352b",
              fontWeight: "700",
              cursor: "pointer",
            }}
          >
            {filter}
          </button>
        ))}
      </div>
      {recommendedOutfits.length > 0 && (
        <section style={{ marginBottom: "24px" }}>
          <h2 style={{ marginBottom: "12px" }}>Recommended For You</h2>

          {recommendedOutfits.map((outfit) => (
            <OutfitCard key={outfit.id} outfit={outfit} />
          ))}
        </section>
      )}
      {recentlyViewedOutfits.length > 0 && (
        <section style={{ marginBottom: "24px" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "12px",
              marginBottom: "12px",
            }}
          >
            <h2 style={{ margin: 0 }}>Recently Viewed</h2>

            <button
              type="button"
              onClick={clearViewHistory}
              style={{
                border: "1px solid #d9d1c7",
                background: "#fffaf0",
                borderRadius: "999px",
                padding: "8px 12px",
                fontWeight: "700",
                cursor: "pointer",
              }}
            >
              Clear
            </button>
          </div>

          {recentlyViewedOutfits.map((outfit) => (
            <OutfitCard key={outfit.id} outfit={outfit} />
          ))}
        </section>
      )}
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