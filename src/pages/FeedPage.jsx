import outfits from "../data/outfits";
import OutfitCard from "../components/OutfitCard";

export default function FeedPage() {
  return (
    <div style={{ padding: "20px", maxWidth: "500px", margin: "0 auto" }}>
      <h1 style={{ marginBottom: "20px" }}>TMO Feed</h1>
      {outfits.map((outfit) => (
        <OutfitCard key={outfit.id} outfit={outfit} />
      ))}
    </div>
  );
}