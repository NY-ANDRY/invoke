import { useEffect, useRef } from "react";
import gsap from "gsap";

const Float = ({ children, intensity = 10, delai: delay = 0, duration = 2 }) => {
    const elementRef = useRef(null);

    useEffect(() => {
        const element = elementRef.current;

        const animation = gsap.to(element, {
            y: intensity,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut",
            duration: duration,
            delay: delay,
        });

        return () => animation.kill();
    }, [intensity, duration]);

    return (
        <div ref={elementRef} className="float w-full h-full">
            {children}
        </div>
    );
};

export default Float;
