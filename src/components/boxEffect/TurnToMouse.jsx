import { useRef, useEffect } from "react";
import gsap from "gsap";
import useOnScreen from "../../hooks/useOnscreen";

const TurnToMouse = ({ children, multi = 20, active = true, speed = 0.8, otherClass = "", ...rest }) => {
    const divRef = useRef(null);
    const onScreen = useOnScreen(divRef);
    const animationFrameId = useRef(null);

    useEffect(() => {
        if (!active || !onScreen) return;

        const handleMouseMove = (e) => {
            if (!divRef.current) return;
            if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);

            animationFrameId.current = requestAnimationFrame(() => {
                const element = divRef.current;
                const rect = element.getBoundingClientRect();
                const centerX = rect.left + rect.width / 2;
                const centerY = rect.top + rect.height / 2;

                const deltaX = e.clientX - centerX;
                const deltaY = e.clientY - centerY;

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
            });
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
        };
    }, [multi, active, onScreen, speed]);

    return (
        <div ref={divRef} className={`${otherClass} ttm flex-center w-fit h-fit will-change-transform`} {...rest}>
            {children}
        </div>
    );
};

export default TurnToMouse;
