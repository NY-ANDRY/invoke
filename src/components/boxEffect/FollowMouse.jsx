import { useRef, useEffect } from "react";
import gsap from "gsap";
import useOnScreen from "../../hooks/useOnscreen";

const FollowMouse = ({ children, active = true, multiX = 20, multiY = 10, speed = 0.4, otherClass = "", ...rest }) => {
    const divRef = useRef(null);
    const onScreen = useOnScreen(divRef);
    let animationFrameId = useRef(null);

    useEffect(() => {
        if (!active || !onScreen) return;

        const handleMouseMove = (e) => {
            if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);

            animationFrameId.current = requestAnimationFrame(() => {
                const xMove = (e.clientX / window.innerWidth - 0.5) * multiX;
                const yMove = (e.clientY / window.innerHeight - 0.5) * multiY;

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
            if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
        };
    }, [active, onScreen, multiX, multiY, speed]);

    return (
        <div ref={divRef} className={`${otherClass} fm flex-center w-fit h-fit will-change-transform`} {...rest}>
            {children}
        </div>
    );
};

export default FollowMouse;
