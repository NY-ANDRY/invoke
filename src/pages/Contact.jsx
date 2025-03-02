import { useEffect, useRef } from "react";
import gsap from "gsap";

const Contact = () => {
    const lettersRef = useRef([]);

    useEffect(() => {
        gsap.fromTo(
            lettersRef.current,
            { opacity: 0, y: 10 },
            { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: "power4.out" }
        );
    }, []);

    const handleMouseEnter = () => {
        gsap.to(lettersRef.current, {
            color: "#1138FF",
            duration: 0.02,
            stagger: 0.02
        });
    };

    const handleMouseLeave = () => {
        gsap.to(lettersRef.current, {
            color: "#ffffff",
            duration: 0.02,
            stagger: 0.02
        });
    };

    return (
        <div
            id="contact"
            className="flex fixed justify-center text-xs tracking-[3px] items-center h-full pr-4 pl-4 top-0 right-0 z-10 cursor-pointer"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className="cursor-pointer z-20">
                {"CONTACT".split("").map((letter, i) => (
                    <span key={i}
                        ref={el => lettersRef.current[i] = el}
                        className="inline-block opacity-0"
                    >
                        {letter}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default Contact;
