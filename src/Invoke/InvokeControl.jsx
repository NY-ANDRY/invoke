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

            <div className="flex justify-center relative gap-8 pt-0 pb-20">
                {(!play && !demo) &&
                    <>
                        <div className="absolute -top-24 cursor-pointer" onClick={() => { setDemo(true) }}>demo</div>
                        <div className="absolute -top-16">PRESS SPACE TO START</div>
                    </>
                }
                {(demo) &&
                    <div onClick={() => { setDemo(false) }} className="absolute -top-16 cursor-pointer">PLAY</div>
                }
                {orbs.map((orb, index) => (
                    <img key={index} src={orbImages[orb]} width={82} className="invoker-img" alt={`Orb ${orb}`} />
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
                    <img src={quasIMG} width={52} className="invoker-img" alt="quas" />
                </div>
                <div onClick={handleWex} className="cast flex flex-col items-center gap-3 w-fit">
                    <input
                        type="text"
                        className="cast-input"
                        value={wex}
                        onChange={(e) => setWex(e.target.value)}
                        maxLength={1}
                    />
                    <img src={wexIMG} width={52} className="invoker-img" alt="wex" />
                </div>
                <div onClick={handleExort} className="cast flex flex-col items-center gap-3 w-fit">
                    <input
                        type="text"
                        className="cast-input"
                        value={exort}
                        onChange={(e) => setExort(e.target.value)}
                        maxLength={1}
                    />
                    <img src={exortIMG} width={52} className="invoker-img" alt="exort" />
                </div>
                <div onClick={handleInvocation} className="cast flex flex-col items-center gap-3 w-fit">
                    <input
                        type="text"
                        className="cast-input"
                        value={mix}
                        onChange={(e) => setMix(e.target.value)}
                        maxLength={1}
                    />
                    <img src={InvokeIMG} width={52} className="invoker-img" alt="mix" />
                </div>
            </div>
        </>
    );
};

export default InvokerControl;
