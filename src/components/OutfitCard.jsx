export default function OutfitCard({ outfit }) {
  return (
    <div
      style={{
        background: "#ffffff",
        borderRadius: "16px",
        padding: "16px",
        marginBottom: "20px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
      }}
    >
      <img
        src={outfit.image}
        alt={outfit.name}
        style={{
          width: "100%",
          borderRadius: "12px",
          marginBottom: "12px",
        }}
      />
      <h2 style={{ fontSize: "1.2rem", marginBottom: "8px" }}>{outfit.name}</h2>
      <p style={{ color: "#666", marginBottom: "8px" }}>
        {outfit.culture} • {outfit.occasion}
      </p>
      <p style={{ marginBottom: "12px" }}>{outfit.description}</p>
      <button style={{ marginRight: "10px" }}>Try On</button>
      <button>Save</button>
    </div>
  );
}