import { Link, useNavigate, useParams } from "react-router-dom";
import { useRef, useState } from "react";
import html2canvas from "html2canvas";
import outfits from "../data/outfits";
import useCamera from "../hooks/useCamera";

export default function TryOnPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const outfit = outfits.find((item) => item.id === id);
  const currentIndex = outfits.findIndex((item) => item.id === id);

  const previousOutfit =
    currentIndex > 0 ? outfits[currentIndex - 1] : outfits[outfits.length - 1];

  const nextOutfit =
    currentIndex < outfits.length - 1 ? outfits[currentIndex + 1] : outfits[0];

  const [overlaySize, setOverlaySize] = useState(70);
  const [overlayY, setOverlayY] = useState(0);
  const captureRef = useRef(null);
  const [snapshot, setSnapshot] = useState("");
  const { videoRef, cameraError } = useCamera();

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
  function showPreviousOutfit() {
    navigate(`/try-on/${previousOutfit.id}`);
  }

  function showNextOutfit() {
    navigate(`/try-on/${nextOutfit.id}`);
  }
  function downloadSnapshot() {
    if (!snapshot) {
      return;
    }

    const link = document.createElement("a");
    link.href = snapshot;
    link.download = `${outfit.id}-try-on.png`;
    link.click();
  }
  async function shareSnapshot() {
    if (!snapshot) {
      return;
    }

    try {
      const response = await fetch(snapshot);
      const blob = await response.blob();

      const file = new File([blob], `${outfit.id}-try-on.png`, {
        type: "image/png",
      });

      if (navigator.canShare && navigator.canShare({ files: [file] })) {
        await navigator.share({
          title: `Trying on ${outfit.name}`,
          text: `Check out this ${outfit.name} look from TMO.`,
          files: [file],
        });
      } else {
        alert("Sharing is not supported in this browser. You can download the image instead.");
      }
    } catch {
      alert("Snapshot could not be shared. Please try downloading it instead.");
    }
  }

  async function captureTryOn() {
    if (!captureRef.current) {
      return;
    }

    try {
      const canvas = await html2canvas(captureRef.current, {
        backgroundColor: null,
        useCORS: true,
      });

      const imageData = canvas.toDataURL("image/png");
      setSnapshot(imageData);
    } catch {
      alert("Snapshot could not be captured. Please try again.");
    }
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
          ref={captureRef}
          style={{
            position: "relative",
            height: "520px",
            borderRadius: "20px",
            overflow: "hidden",
            background: "#111",
            border: "1px solid rgba(255,255,255,0.12)",
            marginBottom: "18px",
          }}
        >
          {cameraError ? (
            <div
              style={{
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                padding: "24px",
                color: "#d8d0c5",
              }}
            >
              {cameraError}
            </div>
          ) : (
            <video
              ref={videoRef}
              autoPlay
              playsInline
              muted
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transform: "scaleX(-1)",
              }}
            />
          )}

          <img
            src={outfit.overlay}
            alt={`${outfit.name} overlay`}
            style={{
              position: "absolute",
              width: `${overlaySize}%`,
              left: "50%",
              top: "50%",
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
            onClick={showPreviousOutfit}
            style={controlButtonStyle}
          >
            Previous Outfit
          </button>

          <button
            type="button"
            onClick={showNextOutfit}
            style={controlButtonStyle}
          >
            Next Outfit
          </button>
        </div>
        <button
          type="button"
          onClick={captureTryOn}
          style={{
            width: "100%",
            padding: "14px",
            borderRadius: "12px",
            border: "none",
            background: "#ffffff",
            color: "#1f1f1f",
            fontWeight: "700",
            marginBottom: "12px",
          }}
        >
          Capture Look
        </button>

        {snapshot && (
          <div
            style={{
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.14)",
              borderRadius: "16px",
              padding: "12px",
              marginBottom: "12px",
            }}
          >
            <p
              style={{
                marginBottom: "10px",
                color: "#f3d7a4",
                fontWeight: "600",
              }}
            >
              Snapshot Preview
            </p>

            <img
              src={snapshot}
              alt="Captured try-on"
              style={{
                width: "100%",
                borderRadius: "12px",
              }}
            />
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "12px",
                marginTop: "12px",
              }}
            >
              <button
                type="button"
                onClick={downloadSnapshot}
                style={{
                  padding: "12px",
                  borderRadius: "12px",
                  border: "none",
                  background: "#f3d7a4",
                  color: "#1f1f1f",
                  fontWeight: "700",
                }}
              >
                Download
              </button>

              <button
                type="button"
                onClick={shareSnapshot}
                style={{
                  padding: "12px",
                  borderRadius: "12px",
                  border: "1px solid rgba(255,255,255,0.18)",
                  background: "rgba(255,255,255,0.08)",
                  color: "#fff",
                  fontWeight: "700",
                }}
              >
                Share
              </button>
            </div>
          </div>

        )}

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
