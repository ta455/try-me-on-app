export default function AboutPage() {
  return (
    <div style={{ padding: "20px", paddingBottom: "110px" }}>
      <h1 style={{ marginBottom: "12px" }}>About TMO</h1>

      <p style={{ color: "#5c5348", lineHeight: "1.7", marginBottom: "20px" }}>
        Try Me On is a cultural fashion discovery app where users explore
        traditional outfits, learn the meaning behind each style, and try on
        outfits through a filter-like virtual try-on experience.
      </p>

      <section style={{ marginBottom: "24px" }}>
        <h2>Why This Project Exists</h2>
        <p style={{ color: "#5c5348", lineHeight: "1.7" }}>
          TMO combines fashion, culture, education, and interactive technology.
          The goal is to make traditional clothing more accessible, visual, and
          fun to explore.
        </p>
      </section>

      <section style={{ marginBottom: "24px" }}>
        <h2>Current MVP</h2>
        <ul style={{ color: "#5c5348", lineHeight: "1.8", paddingLeft: "20px" }}>
          <li>Scrollable outfit discovery feed</li>
          <li>Cultural outfit detail pages</li>
          <li>Search and filter tools</li>
          <li>Saved outfits</li>
          <li>User preferences</li>
          <li>Simple recommendations</li>
          <li>Camera-based try-on prototype</li>
        </ul>
      </section>

      <section style={{ marginBottom: "24px" }}>
        <h2>Future Roadmap</h2>
        <ul style={{ color: "#5c5348", lineHeight: "1.8", paddingLeft: "20px" }}>
          <li>Real body tracking</li>
          <li>More cultural outfit collections</li>
          <li>AI-powered outfit recommendations</li>
          <li>User accounts and cloud saves</li>
          <li>Shopping links for similar clothing</li>
          <li>Social sharing features</li>
        </ul>
      </section>

      <section>
        <h2>Tech Stack</h2>
        <p style={{ color: "#5c5348", lineHeight: "1.7" }}>
          Built with React, Vite, React Router, JavaScript, localStorage, and
          GitHub Pages.
        </p>
      </section>
    </div>
  );
}