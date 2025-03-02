import React, { createContext, useContext, useState, useRef, useEffect } from "react";
import gsap from "gsap";
import ReactDOM from 'react-dom';
import CursorCube from "../class/CursorCube";
import CursorMatrix from "../class/CursorMatrix";

const MouseContext = createContext();

const MouseContextProvider = ({ children }) => {

    const containerRef = useRef(null);
    const itemRef = useRef(null);
    const [itemContent, setItemContent] = useState(null);

    const cm = new CursorMatrix();
    const cc = new CursorCube();
    let cube = Math.random() < 0.5 ? cm : cc;

    const putCube = (e) => {
        cube = cube == cc ? cm : cc;
        cube.morph();
        cube.nextColor();
        cube.placeItem(e.clientX, e.pageY, document.getElementsByClassName("cursor-box")[0], true);
    }

    const createCube = (e) => {
        const x = e.clientX;
        const y = e.pageY;
        if (!itemRef.current || itemRef.current.childElementCount === 0) {
            cube.placeItem(x, y, containerRef.current);
            cube.morph();
            cube.nextColor();
        }
        if (itemRef.current) {
            gsap.to(itemRef.current, {
                x: x,
                y: y,
                duration: 0.4,
                ease: "power4.out"
            });
        }
    };
    useEffect(() => {

        window.addEventListener("mousedown", putCube);
        window.addEventListener("mousemove", createCube);

        return () => {
            window.removeEventListener("mousemove", createCube);
            window.removeEventListener("mousedown", putCube);
        };
    }, []);

    const setItem = (item) => {
        gsap.killTweensOf(itemRef.current);
        gsap.set(itemRef.current, { opacity: 1 });
        gsap.from(
            itemRef.current,
            {
                opacity: 0,
                duration: 0.09,
                ease: "power1.out",
                onStart: () => {
                    setItemContent(item);
                }
            }
        )
    };
    const removeItem = () => {
        gsap.to(
            itemRef.current,
            {
                opacity: 0,
                duration: 0.09,
                ease: "power1.in",
                onComplete: () => {
                    setItemContent(null);
                }
            }
        )
    };


    return (
        <MouseContext.Provider value={{ setItem, removeItem }}>
            <div className="cursor-container pointer-events-none w-full h-full absolute overflow-hidden">
                <div ref={containerRef} className="cursor-box absolute top-0 left-0 pointer-events-none">
                    <div ref={itemRef} className="relative z-50">
                        {itemContent && ReactDOM.createPortal(itemContent, itemRef.current)}
                    </div>
                </div>
            </div>
            {children}
        </MouseContext.Provider>
    );
};

const useMouse = () => {
    return useContext(MouseContext);
}

export { MouseContextProvider, useMouse };