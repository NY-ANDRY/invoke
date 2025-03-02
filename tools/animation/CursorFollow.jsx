import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const CursorFollower = () => {

    const containerRef = useRef(null);
    const itemRef = useRef(null);

    useEffect(() => {
        const createCube = (e) => {
            const x = e.clientX - 6;
            const y = e.pageY - 6;
            if (!itemRef.current || itemRef.current.innerHTML == "") {
                const cube = document.createElement("div");
                cube.style.position = "absolute";
                cube.style.left = `${x}px`;
                cube.style.top = `${y}px`;
                cube.style.width = "16px";
                cube.style.height = "16px";
                cube.style.border = "2px solid #1138FF99";
                cube.style.backgroundColor = "transparent";
                cube.style.borderRadius = "0px";
                cube.style.pointerEvents = "none";

                containerRef.current.appendChild(cube);

                gsap.to(cube, {
                    rotationZ: 360,
                    width: 0,
                    height: 0,
                    opacity: 0,
                    duration: 1,
                    ease: "power2.out",
                    onComplete: () => {
                        cube.remove();
                    }
                });
            }
            const item = itemRef.current;
            if (item) {
                const itemWidth = item.offsetWidth;
                const itemHeight = item.offsetHeight;
                gsap.to(item, {
                    x: x - itemWidth / 2,
                    y: y - itemHeight / 2,
                    duration: 1,
                    ease: "power4.out"
                });
            }
        };

        window.addEventListener("mousemove", createCube);

        return () => window.removeEventListener("mousemove", createCube);
    }, []);

    return (
        <div ref={containerRef} className="cursor-box absolute top-0 left-0 pointer-events-none z-0">
            <div ref={itemRef} className="relative" />
        </div>
    );
};

export default CursorFollower;

