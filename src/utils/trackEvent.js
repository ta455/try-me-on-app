import { db, auth } from "../firebase";
import { doc, setDoc, collection, addDoc, serverTimestamp } from "firebase/firestore";

/**
 * Logs a user engagement event to Firestore.
 * 
 * eventType: "like" | "save" | "unsave" | "try_on" | "detail_view"
 * outfitId: the outfit's id string e.g. "khmer-dress"
 */
export async function trackEvent(eventType, outfitId) {
    const user = auth.currentUser;

    // only track logged-in users
    if (!user) return;

    try {
        // 1. add to events subcollection — full history log
        const eventsRef = collection(db, "users", user.uid, "events");
        await addDoc(eventsRef, {
            type: eventType,
            outfitId,
            timestamp: serverTimestamp(),
        });

        // 2. update interaction counts on the user document
        const userRef = doc(db, "users", user.uid);
        await setDoc(
            userRef,
            {
                interactions: {
                    [outfitId]: {
                        [eventType]: true,
                        lastInteracted: serverTimestamp(),
                    },
                },
            },
            { merge: true }
        );
    } catch (err) {
        console.error("trackEvent failed:", err);
    }
}