import { useRef, useEffect } from "react";
import { gsap } from "gsap";

const Glow = ({ children, interval = 4000 }) => {
    const lettersRef = useRef([]);
    const enterRef = useRef(true);

    const handleMouseEnter = () => {
        gsap.to(lettersRef.current, {
            color: "#1138FF",
            duration: 0.02,
            stagger: 0.02
        });
        gsap.to(lettersRef.current, {
            color: "#ffffff",
            duration: 0.02,
            stagger: 0.02,
            delay: 0.08
        });
    };

    const handleMouseLeave = () => {
        gsap.to(lettersRef.current, {
            color: "#1138FF",
            duration: 0.02,
            stagger: -0.02
        });
        gsap.to(lettersRef.current, {
            color: "#ffffff",
            duration: 0.02,
            stagger: -0.02,
            delay: 0.08
        });
    };

    useEffect(() => {
        const intervalll = setInterval(() => {
            if (enterRef.current) {
                handleMouseEnter();
            } else {
                handleMouseLeave();
            }
            enterRef.current = !enterRef.current;
        }, interval);
        return () => clearInterval(intervalll);
    }, []);

    return (
        <span onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {children.split("").map((letter, i) => (
                <span key={i} ref={el => lettersRef.current[i] = el}>
                    {letter === " " ? "\u00A0" : letter}
                </span>
            ))}
        </span>
    );
};

export default Glow;
