import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";

const Search = ({ animate = false }) => {
    const ref = useRef(null);

    useLayoutEffect(() => {
        // if (animate && ref.current) {
        //     gsap.to(ref.current, {
        //         rotation: -360,
        //         repeat: -1,
        //         duration: 1,
        //         ease: "linear"
        //     });
        // } else {
        //     gsap.killTweensOf(ref.current);
        //     gsap.set(ref.current, { rotation: 0 });
        // }
    }, [animate]);

    return (
        <svg ref={ref} className="cursor-pointer" width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.738 8.48485C16.738 12.8874 13.1104 16.4697 8.61898 16.4697C4.12757 16.4697 0.5 12.8874 0.5 8.48485C0.5 4.0823 4.12757 0.5 8.61898 0.5C13.1104 0.5 16.738 4.0823 16.738 8.48485Z" stroke="#6A6A6C" />
            <line y1="-0.5" x2="7.77511" y2="-0.5" transform="matrix(0.71263 0.70154 -0.71263 0.70154 14.1597 14.5454)" stroke="#6A6A6C" />
        </svg>
    )
}

export default Search;