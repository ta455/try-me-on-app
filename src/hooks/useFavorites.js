import { useEffect, useState } from "react";

const STORAGE_KEY = "tmo-favorite-outfits";

function readFavorites() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
}

export default function useFavorites() {
  const [favoriteIds, setFavoriteIds] = useState(readFavorites);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(favoriteIds));
  }, [favoriteIds]);

  function isFavorite(id) {
    return favoriteIds.includes(id);
  }

  function toggleFavorite(id) {
    setFavoriteIds((currentIds) => {
      if (currentIds.includes(id)) {
        return currentIds.filter((currentId) => currentId !== id);
      }

      return [...currentIds, id];
    });
  }

  function removeFavorite(id) {
    setFavoriteIds((currentIds) =>
      currentIds.filter((currentId) => currentId !== id)
    );
  }

  return {
    favoriteIds,
    isFavorite,
    toggleFavorite,
    removeFavorite,
  };
}