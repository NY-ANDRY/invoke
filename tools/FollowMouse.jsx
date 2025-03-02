import { useRef, useEffect, useState } from "react";
import gsap from "gsap";

const FollowMouse = ({ children, active = true, multiX = 20, multiY = 10, speed = 0.4, otherClass, ...rest }) => {
    const divRef = useRef(null);
    const [onScreen, setOnScreen] = useState(false);
    otherClass = otherClass ?? "";

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setOnScreen(true);
                } else {
                    setOnScreen(false);
                }
            },
            {
                root: null,
                threshold: 0.1,
            }
        );

        if (divRef.current) {
            observer.observe(divRef.current);
        }

        return () => {
            if (divRef.current) {
                observer.unobserve(divRef.current);
            }
        };
    }, []);

    useEffect(() => {
        if (!active || !onScreen) return;

        let xMove = 0, yMove = 0;

        const handleMouseMove = (e) => {
            const { clientX, clientY } = e;
            const xPercent = (clientX / window.innerWidth - 0.5) * multiX;
            const yPercent = (clientY / window.innerHeight - 0.5) * multiY;

            xMove = xPercent;
            yMove = yPercent;

            requestAnimationFrame(() => {
                gsap.to(divRef.current, {
                    x: xMove,
                    y: yMove,
                    duration: speed,
                    ease: "power1.out",
                });
            });
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, [active, onScreen]);

    return <div ref={divRef} className={otherClass + "fm flex-center w-fit h-fit "} {...rest}>{children}</div>;
};

export default FollowMouse;
