import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

const InvokeToggle = ({ open }) => {
    const ref = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                ref.current,
                { rotateZ: open ? 180 : 0 },
                {
                    rotateZ: open ? 0 : 180,
                    duration: 0.6,
                    ease: "power4.out"
                }
            );
        }, ref);

        return () => ctx.revert();
    }, [open]);

    return (
        <svg ref={ref} width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.94141 0.882355L15.689 7.20819C15.8575 7.36622 15.8575 7.63379 15.689 7.79182L8.94141 14.1176" stroke="#A7A7A7" strokeLinecap="round" />
            <path d="M1 0.882355L7.74755 7.20819C7.91612 7.36622 7.91612 7.63379 7.74755 7.79182L1 14.1176" stroke="#A7A7A7" strokeLinecap="round" />
        </svg>
    );
};

export default InvokeToggle;
