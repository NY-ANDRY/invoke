import React, { createContext, useContext, useState, useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import { spellName, spellImages, QuasWexExort, spellDescription } from "./spellData";
import { fetchLeaderboard, saveRealtimeScore, saveScore, changeRealtimeName } from "./InvokeFirebase";

const InvokeContext = createContext();

const InvokeContextProvider = ({ children }) => {
    const [name, setName] = useState("");
    const [demo, setDemo] = useState(true);
    const [currentSpells, setCurrentSpells] = useState(Array(5).fill({ name: null, image: null }));
    const [currentInvocation, setCurrentInvocation] = useState({});
    const [duration, setDuration] = useState(10);
    const [currentSpell, setCurrentSpell] = useState("blast");
    const [invoke, setInvoke] = useState(0);
    const [score, setScore] = useState(0);
    const [combo, setCombo] = useState(0);
    const [strikeCombo, setStrikeCombo] = useState(0);
    const [bestCombo, setBestCombo] = useState(0);
    const [play, setPlay] = useState(false);
    const [remainingTime, setRemainingTime] = useState(duration);
    const [lastRand, setLastRand] = useState("");
    const { user } = useAuth();
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

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

    const getName = () => {
        if (name.trim() != "") {
            return name;
        } else if (user) {
            return user.displayName;
        } else {
            return "";
        }
    }

    const restart = async () => {
        setPlay(false);
        setCurrentSpells(Array(5).fill({ name: null, image: null }));
        next(["cs", "gw", "iw"][Math.floor(Math.random() * 3)]);
        next(["emp", "tornado", "alacrity"][Math.floor(Math.random() * 3)]);
        const breakk = ["ss", "fs", "cm"][Math.floor(Math.random() * 3)];
        next(breakk);
        setLastRand(breakk);
        setCombo(0);
        setStrikeCombo(0);
        setBestCombo(0);
        await setScore(0);
        setPlay(true);
        setRemainingTime(duration);
    };

    useEffect(() => {
        fetchLeaderboard(setData, setLoading, setError);
    }, []);

    useEffect(() => {
        changeRealtimeName(user, name, data);
    }, [name]);

    useEffect(() => {
        if (remainingTime <= 0) {
            setPlay(false);
            const strikeComboo = strikeCombo + combo;
            const newCombo = bestCombo < combo ? combo : bestCombo;
            saveScore(user, getName(), score, strikeComboo, newCombo);
        }
    }, [remainingTime]);

    useEffect(() => {
        if (!play) return;
        const interval = setInterval(() => {
            setRemainingTime(prev => (prev > 0 ? prev - 1 : 0));
        }, 1000);
        return () => clearInterval(interval);
    }, [play]);

    useEffect(() => {
        if (!play) return;
        next();
        saveRealtimeScore(user, getName(), score, data);
    }, [score]);

    useEffect(() => {
        if (!play) return;
        if (currentSpells[2].name === currentSpell) {
            let multiplicateur = combo > 0 ? combo : 1;
            setScore(prev => prev + multiplicateur);
            setCombo(prev => prev + 1);
        } else {
            setStrikeCombo(prev => { return (prev + combo) });
            if (bestCombo < combo) setBestCombo(combo);
            setCombo(0);
        }
        console.log(strikeCombo);
    }, [invoke]);
    useEffect(() => {
        setCurrentInvocation({ image: spellImages[currentSpell], description: spellDescription[currentSpell] });
    }, [currentSpell]);

    return (
        <InvokeContext.Provider value={{
            currentSpell, setCurrentSpell, score, setScore, combo, setCombo, invoke,
            setInvoke, play, setPlay, remainingTime, setRemainingTime, currentSpells,
            setCurrentSpells, restart, duration, setDuration,
            spellImages, QuasWexExort, name, setName,
            data, loading, error,
            setCurrentInvocation, currentInvocation,
            demo, setDemo
        }}>
            {children}
        </InvokeContext.Provider>
    );
};

const useInvoke = () => useContext(InvokeContext);

export { InvokeContextProvider, useInvoke };
