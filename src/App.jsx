import { BrowserRouter, Routes, Route } from "react-router-dom";
import FeedPage from "./pages/FeedPage";
import OutfitDetailPage from "./pages/OutfitDetailPage";
import TryOnPage from "./pages/TryOnPage";
import SavedPage from "./pages/SavedPage";
import BottomNav from "./components/BottomNav";

function App() {
  return (
    <BrowserRouter>
      <div className="phone-shell">
        <main className="app-content">
          <Routes>
            <Route path="/" element={<FeedPage />} />
            <Route path="/outfit/:id" element={<OutfitDetailPage />} />
            <Route path="/try-on/:id" element={<TryOnPage />} />
            <Route path="/saved" element={<SavedPage />} />
          </Routes>
        </main>
        <BottomNav />
      </div>
    </BrowserRouter>
  );
}

export default App;