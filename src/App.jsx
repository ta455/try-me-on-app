import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import FeedPage from "./pages/FeedPage";
import OutfitDetailPage from "./pages/OutfitDetailPage";
import TryOnPage from "./pages/TryOnPage";
import SavedPage from "./pages/SavedPage";
import BottomNav from "./components/BottomNav";
import PreferencesPage from "./pages/PreferencesPage";
import AboutPage from "./pages/AboutPage";
import AuthPage from "./pages/AuthPage";
import ProtectedRoute from "./components/ProtectedRoute";
import ProfilePage from "./pages/ProfilePage";

function App() {
  return (
    <BrowserRouter>
      <div className="phone-shell">
        <main className="app-content">
          <Routes>
            <Route path="/" element={<FeedPage />} />
            <Route path="/outfit/:id" element={<OutfitDetailPage />} />
            <Route
              path="/try-on/:id"
              element={
                <ProtectedRoute>
                  <TryOnPage />
                </ProtectedRoute>
              }
            />

            <Route
              path="/saved"
              element={
                <ProtectedRoute>
                  <SavedPage />
                </ProtectedRoute>
              }
            />

            <Route
              path="/preferences"
              element={
                <ProtectedRoute>
                  <PreferencesPage />
                </ProtectedRoute>
              }
            />
            <Route path="/about" element={<AboutPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
            <Route path="/account" element={<AuthPage />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Routes>
        </main>
        <BottomNav />
      </div>
    </BrowserRouter>
  );
}

export default App;
