import { useState, useEffect } from "react";
import { fetchOutfits } from "../utils/api";

export default function useOutfits() {
    const [outfits, setOutfits] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function loadOutfits() {
            try {
                setLoading(true);
                const data = await fetchOutfits();
                setOutfits(data);
            } catch (err) {
                console.error("Failed to load outfits:", err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }

        loadOutfits();
    }, []);

    return { outfits, loading, error };
}