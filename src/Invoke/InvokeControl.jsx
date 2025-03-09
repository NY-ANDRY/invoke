import { useRef, useState, useEffect } from "react";
import Voker from "./class/Voker";
import { useInvoke } from "./InvokeContext";

import quasIMG from './img/quas.jpg';
import wexIMG from './img/wex.jpg';
import exortIMG from './img/exort.jpg';
import InvokeIMG from './img/invoke.jpg';

const InvokerControl = () => {
    const Invoker = useRef(new Voker());
    const { setCurrentSpell, setInvoke, restart, QuasWexExort, play, demo, setDemo } = useInvoke();

    const [quas, setQuas] = useState('a');
    const [wex, setWex] = useState('s');
    const [exort, setExort] = useState('d');
    const [mix, setMix] = useState('f');

    const [orbs, setOrbs] = useState([...Invoker.current.cur]);

    const orbImages = {
        0: QuasWexExort.quas,
        1: QuasWexExort.wex,
        2: QuasWexExort.exort,
        3: QuasWexExort.mix
    };

    const handleQuas = () => {
        Invoker.current.update(0);
        setOrbs([...Invoker.current.cur]);
    }
    const handleWex = () => {
        Invoker.current.update(1);
        setOrbs([...Invoker.current.cur]);
    }
    const handleExort = () => {
        Invoker.current.update(2);
        setOrbs([...Invoker.current.cur]);
    }
    const handleInvocation = () => {
        setCurrentSpell(Invoker.current.getSpell());
        setInvoke((prev) => (prev + 1));
    }

    useEffect(() => {
        const handleKeydown = (e) => {
            switch (e.key) {
                case quas:
                    handleQuas();
                    break;
                case wex:
                    handleWex();
                    break;
                case exort:
                    handleExort();
                    break;
                case mix:
                    handleInvocation();
                    break;
                default:
                    break;
            }
        };

        document.addEventListener('keydown', handleKeydown);
        return () => {
            document.removeEventListener('keydown', handleKeydown);
        };
    }, [quas, wex, exort, mix]);

    useEffect(() => {
        const begin = (e) => {
            if (e.key === " ") {
                restart();
            }
        }
        window.addEventListener("keydown", begin);
        return () => window.removeEventListener("keydown", begin);
    }, [])

    return (
        <>

            <div className="flex justify-center relative gap-8 pt-0 lg:pb-20">
                {(!play && !demo) &&
                    <>
                        <button className="absolute text-sm lg:text-base -top-24 lg:-top-28 bg-black p-1 px-4 rounded-sm" onClick={() => { setDemo(true) }}>demo</button>
                        <div onClick={restart} className="absolute text-sm lg:text-base -top-12 lg:-top-16">PRESS SPACE OR HERE TO START</div>
                    </>
                }
                {(demo) &&
                    <button onClick={() => { setDemo(false) }} className="absolute text-sm lg:text-base -top-16 bg-black p-1 px-4 rounded-sm">PLAY</button>
                }
                {orbs.map((orb, index) => (
                    <img key={index} src={orbImages[orb]} className="invoker-img w-[60px] lg:w-[82px]" alt={`Orb ${orb}`} />
                ))}
            </div>
            <div className="flex gap-4 pt-6">
                <div onClick={handleQuas} className="cast flex flex-col items-center gap-3 w-fit">
                    <input
                        type="text"
                        className="cast-input"
                        value={quas}
                        onChange={(e) => setQuas(e.target.value)}
                        maxLength={1}
                    />
                    <img src={quasIMG} className="invoker-img w-16 lg:w-[52px]" alt="quas" />
                </div>
                <div onClick={handleWex} className="cast flex flex-col items-center gap-3 w-fit">
                    <input
                        type="text"
                        className="cast-input"
                        value={wex}
                        onChange={(e) => setWex(e.target.value)}
                        maxLength={1}
                    />
                    <img src={wexIMG} className="invoker-img w-16 lg:w-[52px]" alt="wex" />
                </div>
                <div onClick={handleExort} className="cast flex flex-col items-center gap-3 w-fit">
                    <input
                        type="text"
                        className="cast-input"
                        value={exort}
                        onChange={(e) => setExort(e.target.value)}
                        maxLength={1}
                    />
                    <img src={exortIMG} className="invoker-img w-16 lg:w-[52px]" alt="exort" />
                </div>
                <div onClick={handleInvocation} className="cast flex flex-col items-center gap-3 w-fit">
                    <input
                        type="text"
                        className="cast-input"
                        value={mix}
                        onChange={(e) => setMix(e.target.value)}
                        maxLength={1}
                    />
                    <img src={InvokeIMG} className="invoker-img w-16 lg:w-[52px]" alt="mix" />
                </div>
            </div>
        </>
    );
};

export default InvokerControl;
