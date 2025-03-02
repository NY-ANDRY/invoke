import React, { createContext, useContext, useState, useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import alacrity from './img/alacrity.jpg';
import blast from './img/blast.jpg';
import cm from './img/cm.jpg';
import cs from './img/cs.jpg';
import emp from './img/emp.jpg';
import fs from './img/fs.jpg';
import gw from './img/gw.jpg';
import iw from './img/iw.jpg';
import ss from './img/ss.jpg';
import tornado from './img/tornado.jpg';
import quas from './img/quas.jpg';
import wex from './img/wex.jpg';
import exort from './img/exort.jpg';
import mix from './img/invoke.jpg';
import { database } from "../config/firebaseConfig";
import { ref, onValue, remove, set, update } from "firebase/database";

const InvokeContext = createContext();

const InvokeContextProvider = ({ children }) => {
    const spellName = ["cs", "gw", "iw", "emp", "tornado", "alacrity", "ss", "fs", "cm", "blast"];
    const spellImages = { alacrity, blast, cm, cs, emp, fs, gw, iw, ss, tornado };
    const QuasWexExort = { quas, wex, exort, mix };

    const [name, setName] = useState("");
    const [currentSpells, setCurrentSpells] = useState(Array(5).fill({ name: null, image: null }));
    const [duration, setDuration] = useState(30);
    const [currentSpell, setCurrentSpell] = useState("blast");
    const [invoke, setInvoke] = useState(0);
    const [score, setScore] = useState(0);
    const [combo, setCombo] = useState(0);
    const [play, setPlay] = useState(false);
    const [remainingTime, setRemainingTime] = useState(duration);
    const [lastRand, setLastRand] = useState("");

    const randomSpell = () => {
        let result;
        do {
            result = spellName[Math.floor(Math.random() * spellName.length)];
        } while (result === lastRand);
        setLastRand(result);
        return result;
    };

    const next = (fastSpell) => {
        const rand = fastSpell || randomSpell();
        setCurrentSpells(prev => [...prev.slice(1), { name: rand, image: spellImages[rand] }]);
    };

    const restart = async () => {
        setPlay(false);
        setCurrentSpells(Array(5).fill({ name: null, image: null }));

        next(["cs", "gw", "iw"][Math.floor(Math.random() * 3)]);
        next(["emp", "tornado", "alacrity"][Math.floor(Math.random() * 3)]);
        const breakk = ["ss", "fs", "cm"][Math.floor(Math.random() * 3)];
        next(breakk);
        setLastRand(breakk);

        setCombo(0);
        await setScore(0);
        setPlay(true);
        setRemainingTime(duration);
    };

    useEffect(() => {
        if (remainingTime <= 0) setPlay(false);
    }, [remainingTime]);

    useEffect(() => {
        if (!play) return;
        next();
        save();
    }, [score]);

    useEffect(() => {
        if (!play) return;
        if (currentSpells[2].name === currentSpell) {
            let multiplicateur = combo > 0 ? combo : 1;
            setScore(prev => (prev + multiplicateur));
            setCombo(prev => (prev + 1));
        } else {
            setCombo(0);
        }
    }, [invoke]);

    useEffect(() => {
        if (!play) return;
        const interval = setInterval(() => {
            setRemainingTime(prev => (prev > 0 ? prev - 1 : 0));
        }, 1000);
        return () => clearInterval(interval);
    }, [play]);

    /////
    const { user } = useAuth();
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    useEffect(() => {
        const dataRef = ref(database, "invoke");
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
    }, []);

    const getLast = (data) => {
        if (data.length === 0) return null;
        let result = data[0];
        data.forEach((item) => {
            if (item.score < result.score) {
                result = item;
            }
        });
        return result;
    };
    const getName = () => {
        if (name != "") {
            return name;
        } else if (user) {
            return user.displayName;
        } else {
            return "";
        }
    }
    const save = async () => {
        if (!user) {
            console.log("not connected");
            return;
        }

        const userId = user.uid;
        const existingUser = data.find((item) => item.id === userId);
        const lastItem = getLast(data);

        if (existingUser) {
            if (score > existingUser.score) {
                const userRef = ref(database, `invoke/${userId}`);
                await update(userRef, { score: score, name: getName() });
            } else {

            }
        } else {
            if (lastItem && score > lastItem.score) {
                const lastItemRef = ref(database, `invoke/${lastItem.id}`);
                await remove(lastItemRef);

                const newItem = { name: getName(), score };

                const newItemRef = ref(database, `invoke/${userId}`);
                await set(newItemRef, newItem);
            } else {

            }
        }
    };
    useEffect(() => {
        changeName(name);
    }, [name]);
    const changeName = async (newName) => {
        if (!user || data == [] || !getPass(data)) { return; }
        try {
            const toShow = newName.trim() == "" ? user.displayName : newName;
            const userRef = ref(database, `invoke/${user.uid}`);
            await update(userRef, { name: toShow });
        } catch (error) {
            return;
        }
    }
    const getPass = (topData) => {
        topData.forEach((item) => {
            if (item.id == user.uid) {
                pass = true;
            }
        });
        return false;
    }

    return (
        <InvokeContext.Provider value={{
            currentSpell, setCurrentSpell, score, setScore, combo, setCombo, invoke,
            setInvoke, play, setPlay, remainingTime, setRemainingTime, currentSpells,
            setCurrentSpells, restart, duration, setDuration,
            spellName, spellImages, QuasWexExort, name, setName,
            data, loading, error
        }}>
            {children}
        </InvokeContext.Provider>
    );
};

const useInvoke = () => useContext(InvokeContext);

export { InvokeContextProvider, useInvoke };