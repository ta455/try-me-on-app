const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3001";

export async function fetchOutfits() {
    const response = await fetch(`${BASE_URL}/api/outfits`);

    if (!response.ok) {
        throw new Error("Failed to fetch outfits");
    }

    return response.json();
}

export async function fetchOutfitById(id) {
    const response = await fetch(`${BASE_URL}/api/outfits/${id}`);

    if (!response.ok) {
        throw new Error(`Failed to fetch outfit: ${id}`);
    }

    return response.json();
}

export async function fetchOutfitsByTag(tag) {
    const response = await fetch(`${BASE_URL}/api/outfits?tag=${tag}`);

    if (!response.ok) {
        throw new Error("Failed to fetch outfits by tag");
    }

    return response.json();
}