import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import outfits from "../data/outfits";

export default function TryOnPage() {
  const { id } = useParams();
  const outfit = outfits.find((item) => item.id === id);

  const [overlaySize, setOverlaySize] = useState(70);
  const [overlayY, setOverlayY] = useState(0);

  if (!outfit) {
    return <h1 style={{ padding: "20px" }}>Outfit not found</h1>;
  }

  function makeBigger() {
    setOverlaySize((currentSize) => Math.min(currentSize + 5, 100));
  }

  function makeSmaller() {
    setOverlaySize((currentSize) => Math.max(currentSize - 5, 40));
  }

  function moveUp() {
    setOverlayY((currentY) => currentY - 10);
  }

  function moveDown() {
    setOverlayY((currentY) => currentY + 10);
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#1f1f1f",
        color: "#fff",
        padding: "20px 16px 32px",
      }}
    >
      <div style={{ maxWidth: "520px", margin: "0 auto" }}>
        <Link
          to={`/outfit/${outfit.id}`}
          style={{
            display: "inline-block",
            marginBottom: "16px",
            color: "#f3d7a4",
            fontWeight: "600",
          }}
        >
          Back to Outfit
        </Link>

        <div style={{ marginBottom: "18px" }}>
          <p
            style={{
              fontSize: "0.85rem",
              color: "#f3d7a4",
              textTransform: "uppercase",
              letterSpacing: "1px",
              fontWeight: "600",
              marginBottom: "6px",
            }}
          >
            Virtual Try On
          </p>

          <h1
            style={{
              fontSize: "1.8rem",
              lineHeight: "1.2",
              marginBottom: "6px",
            }}
          >
            {outfit.name}
          </h1>

          <p style={{ color: "#d8d0c5" }}>
            {outfit.culture} - {outfit.occasion}
          </p>
        </div>

        <div
          style={{
            position: "relative",
            height: "520px",
            borderRadius: "20px",
            overflow: "hidden",
            background:
              "linear-gradient(180deg, #4c4a45 0%, #2d2c2a 45%, #171717 100%)",
            border: "1px solid rgba(255,255,255,0.12)",
            marginBottom: "18px",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: "20px",
              border: "1px dashed rgba(255,255,255,0.25)",
              borderRadius: "16px",
            }}
          />

          <div
            style={{
              position: "absolute",
              top: "42%",
              left: "50%",
              width: "120px",
              height: "190px",
              transform: "translate(-50%, -50%)",
              borderRadius: "60px 60px 40px 40px",
              background: "rgba(255,255,255,0.16)",
              border: "1px solid rgba(255,255,255,0.2)",
            }}
          />

          <img
            src={outfit.overlay}
            alt={`${outfit.name} overlay`}
            style={{
              position: "absolute",
              width: `${overlaySize}%`,
              left: "50%",
              top: `50%`,
              transform: `translate(-50%, calc(-50% + ${overlayY}px))`,
              pointerEvents: "none",
            }}
          />
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "12px",
            marginBottom: "12px",
          }}
        >
          <button
            type="button"
            onClick={moveUp}
            style={controlButtonStyle}
          >
            Move Up
          </button>

          <button
            type="button"
            onClick={moveDown}
            style={controlButtonStyle}
          >
            Move Down
          </button>

          <button
            type="button"
            onClick={makeSmaller}
            style={controlButtonStyle}
          >
            Smaller
          </button>

          <button
            type="button"
            onClick={makeBigger}
            style={controlButtonStyle}
          >
            Bigger
          </button>
        </div>

        <Link to="/" style={{ display: "block" }}>
          <button
            style={{
              width: "100%",
              padding: "14px",
              borderRadius: "12px",
              border: "none",
              background: "#f3d7a4",
              color: "#1f1f1f",
              fontWeight: "700",
            }}
          >
            Back to Feed
          </button>
        </Link>
      </div>
    </div>
  );
}

const controlButtonStyle = {
  padding: "13px",
  borderRadius: "12px",
  border: "1px solid rgba(255,255,255,0.18)",
  background: "rgba(255,255,255,0.08)",
  color: "#fff",
  fontWeight: "600",
};