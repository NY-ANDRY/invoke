import { useEffect, useRef } from "react";
import gsap from "gsap";

const Parallax = ({ children, speed = 2, scrub = 2, start = 'bottom' }) => {
    const elementRef = useRef(null);

    useEffect(() => {
        const element = elementRef.current;

        const ctx = gsap.context(() => {
            gsap.fromTo(
                element,
                { y: 0 },
                {
                    y: speed * 100,
                    ease: "none",
                    scrollTrigger: {
                        trigger: element,
                        start: `top ${start}`,
                        end: `top top`,
                        scrub: scrub,
                    },
                }
            );
        }, element);

        return () => ctx.revert();
    }, [speed, scrub]);

    return (
        <div ref={elementRef} className="paral w-full h-full">
            {children}
        </div>
    );
};

export default Parallax;
