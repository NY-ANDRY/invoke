import { realtimeDb, db } from "../config/firebaseConfig";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { ref, onValue, remove, set, update } from "firebase/database";

export const fetchLeaderboard = (setData, setLoading, setError) => {
    const dataRef = ref(realtimeDb, "invoke");
    const unsubscribe = onValue(
        dataRef,
        (snapshot) => {
            if (snapshot.exists()) {
                const dataObj = snapshot.val();
                const dataArray = Object.keys(dataObj).map((key) => ({
                    id: key,
                    ...dataObj[key],
                }));
                setData(dataArray.sort((a, b) => b.score - a.score));
            } else {
                setData([]);
            }
            setLoading(false);
        },
        (error) => {
            console.error("Firebase error:", error);
            setError(true);
            setLoading(false);
        }
    );
    return () => unsubscribe();
};

export const saveRealtimeScore = async (user, name, score, data) => {
    if (!user) return;

    const userId = user.uid;
    const currentPlayer = data.find((item) => item.id === userId);
    const lastItem = data.length ? data[data.length - 1] : null;

    if (currentPlayer) {
        if (score > currentPlayer.score) {
            const userRef = ref(realtimeDb, `invoke/${userId}`);
            await update(userRef, { score, name: name });
        }
    } else {
        if (lastItem && score > lastItem.score) {
            const lastItemRef = ref(realtimeDb, `invoke/${lastItem.id}`);
            await remove(lastItemRef);

            const newItemRef = ref(realtimeDb, `invoke/${userId}`);
            await set(newItemRef, { name: name, score });
        }
    }
};

export const saveScore = async (user, name, score, strikeCombo, bestCombo) => {
    if (!user) return;

    try {
        const userRef = doc(db, "stat", user.uid);
        const userSnap = await getDoc(userRef);
        const data = userSnap.data();
        const newCombo = data.combo + strikeCombo;
        const newScore = (!userSnap.exists() || data.score < score) ? score : data.score;
        const newBestScore = (data.bestCombo == undefined || bestCombo > data.bestCombo) ? bestCombo : data.bestCombo;

        await setDoc(userRef, { name: name, score: newScore, combo: newCombo, bestCombo: newBestScore });
    } catch (error) {
        console.error("Firestore save error:", error);
    }
};

export const changeRealtimeName = async (user, newName, data) => {
    if (!user || !data.length || !data.some(item => item.id === user.uid)) return;

    try {
        const userRef = ref(realtimeDb, `invoke/${user.uid}`);
        await update(userRef, { name: newName.trim() || user.displayName });
    } catch (error) {
        console.error("Error updating name:", error);
    }
};
