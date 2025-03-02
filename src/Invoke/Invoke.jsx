import { useState, useEffect } from "react";
import Nav from "../components/layout/Nav";
import logo from "./img/logo.svg";
import InvokeControl from "./InvokeControl";
import InvokeMain from "./InvokeMain";
import InvokeTimer from "./InvokeTimer";
import InvokeScore from "./invokeScore";
import InvokeList from "./InvokeList";
import { InvokeContextProvider } from "./InvokeContext";
import { AuthProvider } from "../contexts/AuthContext";
import { Link } from "react-router-dom";
import './invoke.css';

const Invoke = () => {
    const minWidth = 1100;
    const [isMobile, setIsMobile] = useState(window.innerWidth < minWidth);
    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < minWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <>
            {isMobile &&
                <div className="error flex flex-col items-center justify-center h-[100vh]">
                    <p className="pb-8">insupported device</p>
                    <p className="primary"><Link to={"/"}>back home</Link></p>

                </div>
            }
            {!isMobile &&
                <AuthProvider>
                    <InvokeContextProvider>
                        <section id="invoke" className="flex justify-between tracking-[-0.6px] pl-8 pr-8 h-[100vh]">
                            <div className="flex">
                                <InvokeScore />
                            </div>
                            <div className="flex flex-col items-center gap-8 pt-20 relative ">
                                <img src={logo} width={140} alt="Logo" className="pb-14" />
                                <InvokeTimer />
                                <div className="Invoke-game flex flex-col items-center justify-center w-full pt-12 pb-24">
                                    <InvokeMain />
                                </div>
                                <div className="invoker-control flex flex-col items-center justify-center pt-6">
                                    <InvokeControl />
                                </div>
                            </div>
                            <div className="flex">
                                <InvokeList />
                            </div>
                        </section>
                    </InvokeContextProvider>
                </AuthProvider>
            }

        </>
    );
}

export default Invoke;
