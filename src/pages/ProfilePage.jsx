import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import useCloudFavorites from "../hooks/useCloudFavorites";
import useViewHistory from "../hooks/useViewHistory";
import outfits from "../data/outfits";

export default function ProfilePage() {
    const user = auth.currentUser;
    const { favoriteIds } = useCloudFavorites();
    const { viewedIds } = useViewHistory();
    const navigate = useNavigate();

    async function handleLogout() {
        try {
            await signOut(auth);
            navigate("/auth");
        } catch (err) {
            console.error("Logout failed:", err);
        }
    }

    // if not logged in, redirect to auth
    if (!user) {
        return (
            <div style={{
                minHeight: "100dvh",
                background: "#1A0A2E",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "2rem",
                gap: "1rem",
            }}>
                <p style={{ color: "#7C6FA0", fontSize: "14px" }}>
                    You're not logged in.
                </p>
                <button
                    onClick={() => navigate("/auth")}
                    style={{
                        background: "#7C3AED",
                        color: "#fff",
                        border: "none",
                        borderRadius: "10px",
                        padding: "10px 24px",
                        fontSize: "14px",
                        fontWeight: "600",
                        cursor: "pointer",
                    }}
                >
                    Log in
                </button>
            </div>
        );
    }

    const savedOutfits = outfits.filter((o) => favoriteIds.includes(o.id));
    const recentOutfits = viewedIds
        .map((id) => outfits.find((o) => o.id === id))
        .filter(Boolean)
        .slice(0, 3);

    return (
        <div style={{
            minHeight: "100dvh",
            background: "#1A0A2E",
            padding: "1.5rem 1rem 6rem",
            color: "#fff",
        }}>

            {/* Header */}
            <h1 style={{ fontSize: "20px", fontWeight: "700", marginBottom: "0.25rem" }}>
                My Profile
            </h1>
            <p style={{ color: "#7C6FA0", fontSize: "13px", marginBottom: "2rem" }}>
                {user.email}
            </p>

            {/* Stats row */}
            <div style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                gap: "10px",
                marginBottom: "2rem",
            }}>
                {[
                    { label: "Saved", value: favoriteIds.length },
                    { label: "Viewed", value: viewedIds.length },
                    { label: "Outfits", value: outfits.length },
                ].map((stat) => (
                    <div key={stat.label} style={{
                        background: "#2D1B5E",
                        borderRadius: "12px",
                        padding: "14px 10px",
                        textAlign: "center",
                    }}>
                        <div style={{ fontSize: "24px", fontWeight: "700", color: "#fff" }}>
                            {stat.value}
                        </div>
                        <div style={{ fontSize: "11px", color: "#7C6FA0", marginTop: "2px" }}>
                            {stat.label}
                        </div>
                    </div>
                ))}
            </div>

            {/* Saved outfits preview */}
            <div style={{ marginBottom: "2rem" }}>
                <div style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                }}>
                    <h2 style={{ fontSize: "14px", fontWeight: "600", color: "#C4B5D9" }}>
                        SAVED OUTFITS
                    </h2>
                    <span
                        onClick={() => navigate("/saved")}
                        style={{ fontSize: "12px", color: "#7C3AED", cursor: "pointer" }}
                    >
                        See all
                    </span>
                </div>

                {savedOutfits.length === 0 ? (
                    <p style={{ color: "#7C6FA0", fontSize: "13px" }}>
                        No saved outfits yet — heart an outfit to save it.
                    </p>
                ) : (
                    <div style={{ display: "flex", gap: "10px", overflowX: "auto" }}>
                        {savedOutfits.slice(0, 4).map((outfit) => (
                            <div
                                key={outfit.id}
                                onClick={() => navigate(`/outfit/${outfit.id}`)}
                                style={{
                                    flexShrink: 0,
                                    width: "100px",
                                    cursor: "pointer",
                                }}
                            >
                                <img
                                    src={outfit.image}
                                    alt={outfit.name}
                                    style={{
                                        width: "100px",
                                        height: "130px",
                                        objectFit: "cover",
                                        borderRadius: "10px",
                                        display: "block",
                                    }}
                                />
                                <p style={{
                                    fontSize: "11px",
                                    color: "#C4B5D9",
                                    marginTop: "4px",
                                    textAlign: "center",
                                }}>
                                    {outfit.name}
                                </p>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Recently viewed preview */}
            <div style={{ marginBottom: "2.5rem" }}>
                <h2 style={{
                    fontSize: "14px",
                    fontWeight: "600",
                    color: "#C4B5D9",
                    marginBottom: "10px",
                }}>
                    RECENTLY VIEWED
                </h2>

                {recentOutfits.length === 0 ? (
                    <p style={{ color: "#7C6FA0", fontSize: "13px" }}>
                        No recently viewed outfits yet.
                    </p>
                ) : (
                    <div style={{ display: "flex", gap: "10px", overflowX: "auto" }}>
                        {recentOutfits.map((outfit) => (
                            <div
                                key={outfit.id}
                                onClick={() => navigate(`/outfit/${outfit.id}`)}
                                style={{ flexShrink: 0, width: "100px", cursor: "pointer" }}
                            >
                                <img
                                    src={outfit.image}
                                    alt={outfit.name}
                                    style={{
                                        width: "100px",
                                        height: "130px",
                                        objectFit: "cover",
                                        borderRadius: "10px",
                                        display: "block",
                                    }}
                                />
                                <p style={{
                                    fontSize: "11px",
                                    color: "#C4B5D9",
                                    marginTop: "4px",
                                    textAlign: "center",
                                }}>
                                    {outfit.name}
                                </p>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Log out button */}
            <button
                onClick={handleLogout}
                style={{
                    width: "100%",
                    padding: "13px",
                    borderRadius: "10px",
                    background: "transparent",
                    border: "1px solid #3D2075",
                    color: "#F87171",
                    fontWeight: "600",
                    fontSize: "15px",
                    cursor: "pointer",
                }}
            >
                Log out
            </button>

        </div>
    );
}