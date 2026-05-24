import { BrowserRouter, Routes, Route } from "react-router-dom";
import FeedPage from "./pages/FeedPage";
import OutfitDetailPage from "./pages/OutfitDetailPage";
import TryOnPage from "./pages/TryOnPage";
import SavedPage from "./pages/SavedPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FeedPage />} />
        <Route path="/outfit/:id" element={<OutfitDetailPage />} />
        <Route path="/try-on/:id" element={<TryOnPage />} />
        <Route path="/saved" element={<SavedPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;