import React, { useEffect, useState } from "react";
import { database } from "../firebaseConfig";
import { ref, onValue } from "firebase/database";

const TestFirebase = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const dataRef = ref(database, "creation");

        onValue(dataRef, (snapshot) => {
            if (snapshot.exists()) {
                setData(snapshot.val());
            } else {
                setData(null);
            }
        });

    }, []);

    return (
        <div>
            <h2>Données en temps réel</h2>
            <pre>{data ? JSON.stringify(data, null, 2) : "Chargement..."}</pre>
        </div>
    );
};

export default TestFirebase;
