import { useRef, useEffect, useState } from "react";
import gsap from "gsap";

const TurnToMouse = ({ children, multi = 20, active = true, speed = 0.8, otherClass, ...rest }) => {

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

        const handleMouseMove = (e) => {
            if (!divRef.current) return;

            const { clientX, clientY } = e;
            const element = divRef.current;
            const rect = element.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;

            const deltaX = clientX - centerX;
            const deltaY = clientY - centerY;

            let tiltX = (deltaY / rect.height) * multi;
            let tiltY = -(deltaX / rect.width) * multi;

            tiltX = Math.min(Math.max(tiltX, -10), 10);
            tiltY = Math.min(Math.max(tiltY, -10), 10);

            gsap.to(element, {
                rotateX: tiltX,
                rotateY: tiltY,
                duration: speed,
                ease: "power1.out",
            });
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, [multi, active, onScreen]);

    return <div ref={divRef} className={otherClass + " ttm flex-center w-fit h-fit "} {...rest}>{children}</div>;
};

export default TurnToMouse;
