import { useEffect, useState } from "react";

const STORAGE_KEY = "tmo-user-preferences";

function readPreferences() {
  const savedPreferences = localStorage.getItem(STORAGE_KEY);

  if (!savedPreferences) {
    return [];
  }

  return JSON.parse(savedPreferences);
}

export default function usePreferences() {
  const [preferences, setPreferences] = useState(readPreferences);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(preferences));
  }, [preferences]);

  function togglePreference(preference) {
    if (preferences.includes(preference)) {
      setPreferences(preferences.filter((item) => item !== preference));
    } else {
      setPreferences([...preferences, preference]);
    }
  }
  function clearPreferences() {
    setPreferences([]);
  }
  return {
    preferences,
    togglePreference,
    clearPreferences,
  };
}