import { useEffect, useState } from "react";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../firebase";
import useAuth from "./useAuth";

export default function useCloudFavorites() {
    const { user, authLoading } = useAuth();
    const [favoriteIds, setFavoriteIds] = useState([]);
    const [favoritesLoading, setFavoritesLoading] = useState(true);

    useEffect(() => {
        async function loadFavorites() {
            if (authLoading) {
                return;
            }

            if (!user) {
                setFavoriteIds([]);
                setFavoritesLoading(false);
                return;
            }

            try {
                const userRef = doc(db, "users", user.uid);
                const userSnapshot = await getDoc(userRef);

                if (userSnapshot.exists()) {
                    const userData = userSnapshot.data();
                    setFavoriteIds(userData.favoriteIds || []);
                } else {
                    await setDoc(userRef, { favoriteIds: [] }, { merge: true });
                    setFavoriteIds([]);
                }
            } catch (error) {
                console.error("Failed to load favorites:", error);
                setFavoriteIds([]);
            } finally {
                setFavoritesLoading(false);
            }
        }

        loadFavorites();
    }, [user, authLoading]);

    async function saveFavorites(nextFavoriteIds) {
        setFavoriteIds(nextFavoriteIds);

        if (!user) {
            return;
        }

        const userRef = doc(db, "users", user.uid);
        await setDoc(userRef, { favoriteIds: nextFavoriteIds }, { merge: true });
    }

    function isFavorite(outfitId) {
        return favoriteIds.includes(outfitId);
    }

    async function toggleFavorite(outfitId) {
        const nextFavoriteIds = favoriteIds.includes(outfitId)
            ? favoriteIds.filter((id) => id !== outfitId)
            : [...favoriteIds, outfitId];

        await saveFavorites(nextFavoriteIds);
    }

    async function removeFavorite(outfitId) {
        const nextFavoriteIds = favoriteIds.filter((id) => id !== outfitId);
        await saveFavorites(nextFavoriteIds);
    }

    async function clearFavorites() {
        await saveFavorites([]);
    }

    return {
        favoriteIds,
        favoritesLoading,
        isFavorite,
        toggleFavorite,
        removeFavorite,
        clearFavorites,
    };
}