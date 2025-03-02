import { useEffect, useRef, useState, useCallback } from "react";
import BtnPrimary from "../components/buttons/BtnPrimary";
import gsap from "gsap";
import FollowMouse from "../components/boxEffect/FollowMouse";
import TurnToMouse from "../components/boxEffect/TurnToMouse";

const Hero = ({ onAnimationComplete }) => {

    const boxRef = useRef([]);
    const devDes = useRef(null);
    const sectionRef = useRef(null);
    const [animation, setAnimation] = useState(false);

    useEffect(() => {
        gsap.to(
            sectionRef.current, {
            opacity: 1
        }
        );
        gsap.fromTo(
            boxRef.current[0],
            { opacity: 0, x: 0 },
            { opacity: 1, x: 0, duration: 0.8, ease: "power4.out", delay: 0.1 }
        );
        gsap.fromTo(
            boxRef.current[1],
            { opacity: 0, x: -0 },
            { opacity: 1, x: 0, duration: 0.8, ease: "power4.out", delay: 1.1 }
        );
        gsap.fromTo(
            boxRef.current[2],
            { opacity: 0, x: -3, y: 8 },
            { opacity: 1, x: 0, y: 0, duration: 0.4, ease: "power4.out", delay: 2.1 }
        );
        gsap.fromTo(
            boxRef.current[3],
            { opacity: 0, x: 3, y: -8 },
            {
                opacity: 1, x: 0, y: 0, duration: 0.4, ease: "power4.out", delay: 2.1,
                onComplete: () => {
                    onAnimationComplete();
                    setAnimation(true);
                }
            }
        );
    }, []);

    const handleAboutClick = useCallback(() => {
        document.getElementById('about')?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, []);
    const handleMessageClick = useCallback(() => {
        document.getElementById('message')?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, []);

    return (
        <section ref={sectionRef} id="hero" className="hero-hide opacity-0 ">
            <TurnToMouse active={animation} otherClass="w-full h-full">
                <FollowMouse active={animation} otherClass="w-full h-full" >
                    <div className="hero w-full flex flex-col justify-center items-center min-h-screen max-h-[2000px] pb-[102px] relative">

                        <div ref={(el) => boxRef.current[0] = el} className="hero-item hero-hello text-[48px] font-[is-b] tracking-[-0.16px] pb-[0px] relative right-12">
                            Hi, I'm Paul Ferdinah
                        </div>

                        <div ref={devDes} className="hero-main flex items-center relative text-[48px] font-[is-b] tracking-[-0.16px] pb-[0px]">
                            <div ref={(el) => boxRef.current[2] = el} className="flex hero-hide  items-center">
                                <div className="hero-item hero-name text-[68px] pr-6">
                                    Developer
                                </div>
                                <svg className="hero-item relative left-1.5" width="40" height="72" viewBox="0 0 40 87" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13 86.5H0L27 0H40L13 86.5Z" fill="white" />
                                </svg>
                            </div>
                            <div ref={(el) => boxRef.current[3] = el} className="flex hero-hide items-center">
                                <svg className="hero-item relative right-2" width="40" height="72" viewBox="0 0 40 87" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13 86.5H0L27 0H40L13 86.5Z" fill="#1138FF" />
                                </svg>
                                <div className="hero-item hero-name primary text-[68px] pl-7">
                                    UI UX Designer
                                </div>
                            </div>
                        </div>

                        <div ref={(el) => boxRef.current[1] = el} className="hero-item hero-hide hero-btns flex pt-7 relative right-14">
                            <div className="hero-item hero-btn pr-5">
                                <BtnPrimary
                                    content="About me"
                                    mode="2"
                                    onClick={handleAboutClick}
                                />
                            </div>
                            <div className="hero-item hero-btn pl-5">
                                <BtnPrimary
                                    content="Send message"
                                    onClick={handleMessageClick}
                                />
                            </div>
                        </div>
                    </div>
                </FollowMouse>
            </TurnToMouse>
        </section>
    );
};

export default Hero;
