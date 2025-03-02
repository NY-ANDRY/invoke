import { useRef, useState, useLayoutEffect } from "react";
import { useInvoke } from "./InvokeContext";
import { useAuth } from "../contexts/AuthContext";
import InvokeToggle from "./InvokerToggle";
import gsap from "gsap";

const InvokeScore = () => {
    const { user, login, logout } = useAuth();
    const { score, setName, data, loading, error } = useInvoke();
    const [open, setOpen] = useState(false);
    const color = ["#C3C4D6", "#3d64ff", "#ef3dff", "#ff3d3d"]

    const globalRef = useRef(null);
    const borderRef = useRef(null);
    const openState = {
        height: "auto", duration: 0.4, ease: "power4.out"
    };
    const closeState = {
        height: 0, duration: 0.4, ease: "power4.out"
    };

    useLayoutEffect(() => {
        if (open) {
            gsap.to(globalRef.current, openState);
            gsap.to(borderRef.current, closeState);
        } else {
            gsap.to(globalRef.current, closeState);
            gsap.to(borderRef.current, {
                height: 28, duration: 0.4, ease: "power4.out"
            });
        }
    }, [open]);
    const handleClick = () => {
        setOpen(!open);
    }
    const handleChange = (e) => {
        setName(e.target.value);
    }

    return (
        <>
            <div className="flex items-center justify-center relative whitespace-nowrap gap-6">
                <div ref={borderRef} className="invoke-border flex items-center justify-center">
                </div>
                <div className="flex flex-col items-center justify-center">
                    <div id="score" className="font-[is-sb] text-[20px] relative pr-8" style={{ paddingBottom: open ? 14 : 0 }}>
                        {user && (
                            <>
                                <button onClick={logout} className="pr-2 cursor-pointer relative top-[1.6px]"><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="15" height="15" rx="2" fill="#FF3D3D" />
                                    <rect x="10.125" y="4.06844" width="1.76471" height="8.52999" rx="0.882353" transform="rotate(45 10.125 4.06844)" fill="#F7F7F7" />
                                    <rect x="4.06299" y="5.31049" width="1.76471" height="8.49073" rx="0.882353" transform="rotate(-45 4.06299 5.31049)" fill="#F7F7F7" />
                                </svg>
                                </button>
                                <input type="text" onChange={handleChange} placeholder="your name" className="w-32" />
                            </>
                        )}
                        {!user && (
                            <button onClick={login} type="button" className=" cursor-pointer" >connexion</button>
                        )}
                        <span className="pl-2 pr-2">/</span> <span className=" absolute">{score}</span>
                    </div>
                    <div ref={globalRef} className="global-score overflow-hidden flex flex-col w-full font-[is-sb] text-sm gap-1">
                        {data.length > 0 &&
                            data.map((item, i) => {
                                let scoreColor;
                                if (item.score < 100) {
                                    scoreColor = color[0];
                                } else if (item.score < 400) {
                                    scoreColor = color[1];
                                } else if (item.score < 900) {
                                    scoreColor = color[2];
                                } else {
                                    scoreColor = color[3];
                                }
                                return (
                                    <div key={i} className="score max-w-48 overflow-hidden" style={{ color: scoreColor }}>
                                        <span className="pr-3">{item.score}</span>
                                        <span>{item.name}</span>
                                    </div>
                                );
                            })
                        }
                        {loading &&
                            Array.from({ length: 15 }).map((_, i) => (
                                <div key={i} className="score">
                                    <span className="pr-3">0</span><span>loading...</span>
                                </div>
                            ))
                        }
                        {error &&
                            <div key={i} className="score"><span className="pr-3">0</span><span>disconnected</span></div>
                        }
                        {!user &&
                            <div onClick={login} className="score cursor-pointer" >
                                <span>connect</span>
                            </div>
                        }
                        {user &&
                            <div onClick={logout} className="score cursor-pointer" >
                                <span>disconnect</span>
                            </div>
                        }
                    </div>
                </div>
                <div className="flex items-center justify-center cursor-pointer" onClick={handleClick}>
                    <InvokeToggle open={!open} />
                </div>
            </div>
        </>
    );
}

export default InvokeScore;