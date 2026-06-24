import { Link } from "react-router-dom";
import outfits from "../data/outfits";
import useCloudFavorites from "../hooks/useCloudFavorites";

export default function SavedPage() {
  ​const {
    favoriteIds,
    removeFavorite,
    clearFavorites,
    favoritesLoading,
  } = useCloudFavorites();

  if (favoritesLoading) {
    return <p style={{ padding: "20px" }}>Loading saved outfits...</p>;
  }
  const savedOutfits = outfits.filter((outfit) =>
    favoriteIds.includes(outfit.id)
  );
  const savedCount = savedOutfits.length;

  return (
    <div
      style={{
        padding: "24px 16px 96px",
        maxWidth: "520px",
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
        Back to Feed
      </Link>

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
            fontSize: "2rem",
            lineHeight: "1.2",
            color: "#1f1f1f",
            marginBottom: "10px",
          }}
        >
          Saved Outfits
        </h1>
        <p style={{ color: "#6f6658", marginBottom: "16px" }}>
          {savedCount === 1
            ? "You have 1 saved outfit."
            : `You have ${savedCount} saved outfits.`}
        </p>
        {savedCount > 0 && (
          <button
            type="button"
            onClick={clearFavorites}
            style={{
              width: "100%",
              padding: "14px",
              borderRadius: "12px",
              border: "1px solid #d9d1c7",
              background: "#fffaf0",
              color: "#1f1f1f",
              fontWeight: "700",
              marginBottom: "20px",
              cursor: "pointer",
            }}
          >
            Clear Saved Outfits
          </button>
        )}

        <p
          style={{
            fontSize: "1rem",
            lineHeight: "1.6",
            color: "#5c5348",
          }}
        >
          Keep the looks you want to revisit or try on later.
        </p>
      </div>

      {savedOutfits.length === 0 ? (
        <div
          style={{
            background: "#fff",
            border: "1px solid #eee7dc",
            borderRadius: "20px",
            padding: "24px",
            color: "#5c5348",
            lineHeight: "1.6",
          }}
        >
          No saved outfits yet. Go back to the feed and save a look you like.
        </div>
      ) : (
        savedOutfits.map((outfit) => (
          <div
            key={outfit.id}
            style={{
              background: "#ffffff",
              borderRadius: "20px",
              overflow: "hidden",
              marginBottom: "24px",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.08)",
              border: "1px solid #eee7dc",
            }}
          >
            <Link to={`/outfit/${outfit.id}`}>
              <img
                src={outfit.image}
                alt={outfit.name}
                style={{
                  width: "100%",
                  height: "320px",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </Link>

            <div style={{ padding: "18px" }}>
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
                {outfit.culture} - {outfit.occasion}
              </p>

              <h2
                style={{
                  fontSize: "1.35rem",
                  marginBottom: "10px",
                }}
              >
                {outfit.name}
              </h2>

              <div style={{ display: "flex", gap: "12px" }}>
                <Link to={`/try-on/${outfit.id}`} style={{ flex: 1 }}>
                  <button
                    style={{
                      width: "100%",
                      padding: "12px",
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
                  onClick={() => removeFavorite(outfit.id)}
                  style={{
                    flex: 1,
                    padding: "12px",
                    borderRadius: "12px",
                    border: "1px solid #d9d1c7",
                    background: "#f8f5ef",
                    color: "#1f1f1f",
                    fontWeight: "600",
                  }}
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
