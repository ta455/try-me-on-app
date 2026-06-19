import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "tmo-view-history";

function readViewHistory() {
  const savedHistory = localStorage.getItem(STORAGE_KEY);

  if (!savedHistory) {
    return [];
  }

  return JSON.parse(savedHistory);
}

export default function useViewHistory() {
  const [viewedIds, setViewedIds] = useState(readViewHistory);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(viewedIds));
  }, [viewedIds]);

  const addViewedOutfit = useCallback((outfitId) => {
    setViewedIds((currentIds) => {
      const withoutDuplicate = currentIds.filter((id) => id !== outfitId);
      return [outfitId, ...withoutDuplicate].slice(0, 5);
    });
  }, []);

  function clearViewHistory() {
    setViewedIds([]);
  }

  return {
    viewedIds,
    addViewedOutfit,
    clearViewHistory,
  };
}
