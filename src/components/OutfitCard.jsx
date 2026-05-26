export default function OutfitCard({ outfit }) {
  return (
    <div
      style={{
        background: "#ffffff",
        borderRadius: "20px",
        overflow: "hidden",
        marginBottom: "24px",
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.08)",
        border: "1px solid #eee7dc",
      }}
    >
      <img
        src={outfit.image}
        alt={outfit.name}
        style={{
          width: "100%",
          height: "420px",
          objectFit: "cover",
          display: "block",
        }}
      />

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
          {outfit.culture} • {outfit.occasion}
        </p>

        <h2
          style={{
            fontSize: "1.4rem",
            marginBottom: "10px",
            color: "#1f1f1f",
          }}
        >
          {outfit.name}
        </h2>

        <p
          style={{
            fontSize: "0.98rem",
            lineHeight: "1.6",
            color: "#5c5348",
            marginBottom: "16px",
          }}
        >
          {outfit.description}
        </p>

        <div style={{ display: "flex", gap: "12px" }}>
          <button
            style={{
              flex: 1,
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

          <button
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
            Save
          </button>
        </div>
      </div>
    </div>
  );
}