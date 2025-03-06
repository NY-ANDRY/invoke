import { createContext, useContext, useState, useEffect } from "react";
import { collection, getDocs, query, orderBy, limit, where } from "firebase/firestore";
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

    return (
        <StatContext.Provider value={{
            statistics, loading, error, updateStat, nbStat, setNbStat,
            name, setName, filtre, setFiltre, inversestatistics, order, setOrder
        }}>
            {children}
        </StatContext.Provider>
    );
};

export const useStatistique = () => {
    return useContext(StatContext);
};
