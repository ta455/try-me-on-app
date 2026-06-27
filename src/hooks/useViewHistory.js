import { useState, useEffect, useCallback } from "react";
import { db, auth } from "../firebase";
import { doc, setDoc, onSnapshot } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

const LOCAL_KEY = "tmo-view-history";
const MAX_HISTORY = 5;

function readLocal() {
  try {
    return JSON.parse(localStorage.getItem(LOCAL_KEY)) || [];
  } catch {
    return [];
  }
}

export default function useViewHistory() {
  const [viewedIds, setViewedIds] = useState(readLocal);
  const [userId, setUserId] = useState(null);

  // track auth state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUserId(user ? user.uid : null);
    });
    return unsubscribe;
  }, []);

  // if logged in, sync from Firestore in real time
  useEffect(() => {
    if (!userId) return;

    const ref = doc(db, "users", userId);
    const unsubscribe = onSnapshot(ref, (snap) => {
      if (snap.exists()) {
        const data = snap.data();
        if (data.viewHistory) {
          setViewedIds(data.viewHistory);
        }
      }
    });

    return unsubscribe;
  }, [userId]);

  const addViewedOutfit = useCallback(
    (outfitId) => {
      setViewedIds((currentIds) => {
        const filtered = currentIds.filter((id) => id !== outfitId);
        const updated = [outfitId, ...filtered].slice(0, MAX_HISTORY);

        // always save to localStorage
        localStorage.setItem(LOCAL_KEY, JSON.stringify(updated));

        // save to Firestore if logged in
        if (userId) {
          const ref = doc(db, "users", userId);
          setDoc(ref, { viewHistory: updated }, { merge: true }).catch(
            console.error
          );
        }

        return updated;
      });
    },
    [userId]
  );

  function clearViewHistory() {
    setViewedIds([]);
    localStorage.removeItem(LOCAL_KEY);

    if (userId) {
      const ref = doc(db, "users", userId);
      setDoc(ref, { viewHistory: [] }, { merge: true }).catch(console.error);
    }
  }

  return {
    viewedIds,
    addViewedOutfit,
    clearViewHistory,
  };
}