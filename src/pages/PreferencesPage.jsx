import usePreferences from "../hooks/usePreferences";

const preferenceOptions = [
  "Cambodia",
  "Japan",
  "Korea",
  "India",
  "Traditional",
  "Formal",
  "Ceremonial",
  "Celebration",
  "Festive",
  "East Asia",
  "South Asia",
  "Southeast Asia",
];

export default function PreferencesPage() {
  const { preferences, togglePreference, clearPreferences } = usePreferences();

  return (
    <div style={{ padding: "20px", paddingBottom: "96px" }}>
      <h1 style={{ marginBottom: "8px" }}>Preferences</h1>

      <p style={{ color: "#6f6658", marginBottom: "20px" }}>
        Choose styles and cultures you want to see more often.
      </p>
      <p style={{ color: "#6f6658", marginBottom: "16px" }}>
        {preferences.length === 0
          ? "No preferences selected yet."
          : `Selected preferences: ${preferences.join(", ")}`}
      </p>
      {preferences.length > 0 && (
        <button
          type="button"
          onClick={clearPreferences}
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
          Reset Preferences
        </button>
      )}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
        {preferenceOptions.map((preference) => {
          const isSelected = preferences.includes(preference);

          return (
            <button
              key={preference}
              onClick={() => togglePreference(preference)}
              style={{
                border: "1px solid #d8c7aa",
                borderRadius: "999px",
                padding: "12px 16px",
                background: isSelected ? "#1f1f1f" : "#fffaf0",
                color: isSelected ? "#ffffff" : "#3d352b",
                fontWeight: "700",
                cursor: "pointer",
              }}
            >
              {preference}
            </button>
          );
        })}
      </div>

      <p style={{ marginTop: "24px", color: "#7a7065" }}>
        Selected: {preferences.length > 0 ? preferences.join(", ") : "None yet"}
      </p>
    </div>
  );
}