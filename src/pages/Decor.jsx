import { useEffect } from "react";
import gsap from "gsap";
import FollowMouse from "../components/boxEffect/FollowMouse";

const Decors = () => {

    useEffect(() => {
        gsap.fromTo(
            ".decor-zoom",
            { opacity: 0 },
            { opacity: 1, duration: 0.2, ease: "power4.out" }
        );
    }, []);

    const multi = 2;

    return (
        <>

            <div className="mt-4 ml-4 fixed top-0 z-20">
                <FollowMouse multiX={multi} multiY={multi}>
                    <div className="decor-zoom  dc-1 decors-tl w-3 h-3 border-t-[1px] border-l-[1px] border-white"></div>
                </FollowMouse>
            </div>
            <div className="mt-4 mr-4 fixed top-0 right-0 z-20">
                <FollowMouse multiX={multi} multiY={multi}>
                    <div className="decor-zoom dc-2 decors-tr w-3 h-3 border-t-[1px] border-r-[1px] border-white"></div>
                </FollowMouse>
            </div>
            <div className="mb-4 ml-4 fixed bottom-0 z-20">
                <FollowMouse multiX={multi} multiY={multi}>
                    <div className="decor-zoom dc-3 decors-bl w-3 h-3 border-b-[1px] border-l-[1px] border-white "></div>
                </FollowMouse>
            </div>
            <div className="mb-4 mr-4 fixed bottom-0 right-0 z-20">
                <FollowMouse multiX={multi} multiY={multi}>
                    <div className="decor-zoom dc-4 decors-br w-3 h-3 border-b-[1px] border-r-[1px] border-white "></div>
                </FollowMouse>
            </div>

        </>
    );
}

export default Decors;