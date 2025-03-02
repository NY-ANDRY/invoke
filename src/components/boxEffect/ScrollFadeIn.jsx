import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const ScrollFadeIn = ({ top = 90, bottom = 20, children, otherClass }) => {
    const divRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(
            divRef.current,
            { opacity: 0, y: 10 },
            {
                opacity: 1,
                y: 0,
                duration: 0.4,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: divRef.current,
                    start: `top ${top}%`,
                    end: `bottom ${bottom}%`,
                    toggleActions: 'play reverse restart reverse',
                },
            }
        );
    }, []);

    return <div ref={divRef} className={'scroll-show ' + otherClass + ' flex-center w-fit h-fit will-change-transform'}>{children}</div>;
};

export default ScrollFadeIn;
