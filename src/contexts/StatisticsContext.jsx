import { createContext, useContext, useState, useEffect } from "react";
import { collection, doc, getDoc, getDocs, deleteDoc, query, orderBy, limit, where } from "firebase/firestore";
import { db } from "../config/firebaseConfig";

const StatContext = createContext();

export const StatProvider = ({ children }) => {
    const [statistics, setStatistics] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [nbStat, setNbStat] = useState(100);
    const [name, setName] = useState("");
    const [filtre, setFiltre] = useState("score");
    const [order, setOrder] = useState("desc");

    const updateStat = async () => {
        setLoading(true);
        setError(null);
        try {
            let statRef = collection(db, "stat");
            let q;

            if (name.trim() !== "") {
                q = query(
                    statRef,
                    where("name", ">=", name),
                    where("name", "<", name + "\uf8ff"),
                    orderBy("name"),
                    orderBy("score", "desc"),
                    limit(nbStat > 0 ? nbStat : 1)
                );
            } else {
                q = query(
                    statRef,
                    orderBy(filtre, order),
                    limit(nbStat > 0 ? nbStat : 1)
                );
            }

            const querySnapshot = await getDocs(q);
            const docs = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

            setStatistics(docs);
        } catch (err) {
            console.error(err.message);
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        updateStat();
    }, [nbStat, name, filtre, order]);

    const inversestatistics = () => {
        if (name.trim() !== "") {
            const result = [];
            for (let i = statistics.length - 1; i >= 0; i--) {
                result.push(statistics[i]);
            }
            setStatistics(result);
        } else {
            if (order == "asc") {
                setOrder("desc");
            } else {
                setOrder("asc");
            }
        }
    }
    const getDataOf = async (id) => {
        if (!id) return;

        const docRef = doc(db, "stat", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            return docSnap.data();
        } else {
            return null;
        }
    }
    const removeDataOf = async (id) => {
        if (!id) return;

        const docRef = doc(db, "stat", id);
        try {
            await deleteDoc(docRef);
            setStatistics(prevStats => prevStats.filter(stat => stat.id !== id));
        } catch (err) {
            console.error("Error removing document: ", err.message);
            setError(err.message);
        }
    };
    return (
        <StatContext.Provider value={{
            statistics, loading, error, updateStat, nbStat, setNbStat,
            name, setName, filtre, setFiltre, inversestatistics, order, setOrder,
            getDataOf, removeDataOf
        }}>
            {children}
        </StatContext.Provider>
    );
};

export const useStatistique = () => {
    return useContext(StatContext);
};
