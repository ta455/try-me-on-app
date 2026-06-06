import { BrowserRouter, Routes, Route } from "react-router-dom";
import FeedPage from "./pages/FeedPage";
import OutfitDetailPage from "./pages/OutfitDetailPage";
import TryOnPage from "./pages/TryOnPage";
import SavedPage from "./pages/SavedPage";
import BottomNav from "./components/BottomNav";
import PreferencesPage from "./pages/PreferencesPage";  

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
            <Route path="/preferences" element={<PreferencesPage />} />
          </Routes>
        </main>
        <BottomNav />
      </div>
    </BrowserRouter>
  );
}

export default App;