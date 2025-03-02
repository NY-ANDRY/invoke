import { useEffect } from "react";
import gsap from "gsap";
import Title from "../components/cards/Title";
import Matrix from "../components/boxEffect/Matrix";
import TurnToMouse from "../components/boxEffect/TurnToMouse";
import FollowMouse from "../components/boxEffect/FollowMouse";
import Glow from "../components/boxEffect/Glow";

const About = () => {

    useEffect(() => {

        gsap.fromTo(
            ".about-item",
            {
                opacity: 0,
                y: 10,
            },
            {
                opacity: 1,
                y: 0,
                duration: 0.4,
                ease: "power4.out",
                stagger: 0.05,
                scrollTrigger: {
                    trigger: ".box",
                    start: "top 80%",
                    end: "bottom 5%",
                    toggleActions: "play reverse restart reverse"
                }
            }
        );

    }, []);

    return (
        <>

            <section id="about" className="flex flex-col items-center min-h-[800px] pb-[102px] relative">
                <Title txt="ABOUT" />

                <div className="box flex flex-row-reverse justify-between pt-28 w-[70vw]">
                    <div className="img flex items-center justify-center min-h-full w-56">
                        <FollowMouse multiX={6} multiY={3}>
                            <TurnToMouse multi={5} >
                                <img src="/svg/dark-ph1.svg" className="about-item w-full max-w-full" alt="" />
                            </TurnToMouse>
                        </FollowMouse>
                    </div>

                    <div className="abouts tracking-[1.6px]">
                        <p className="about-item pb-7"><span className="txt-80">Hi, I'm</span> <span className="name-underlined font-[is-m] text-[19px]">Paul</span>,</p>
                        <p className="about-item text-[18px] pb-1">
                            <Matrix interval={7000} >Web developer</Matrix>, <Glow interval={2600} >UI/UX Designer</Glow>
                        </p>
                        <p className="about-item pb-7 txt-80">I create modern, efficient, and optimized websites</p>
                        <p className="about-item txt-60 text-[15px] pb-1">From</p>
                        <p className="about-item pb-7 font-[is-m] text-[17px] flex items-center gap-2.5">Madagascar
                            <svg width="24" height="14" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="8" height="16" fill="white" />
                                <rect x="8" y="7.99976" width="8" height="16" transform="rotate(-90 8 7.99976)" fill="#F24038" />
                                <rect x="8" y="16" width="8" height="16" transform="rotate(-90 8 16)" fill="#007F3D" />
                            </svg>
                        </p>
                        <p className="about-item txt-60 text-[15px] pb-1">Language</p>
                        <p className="about-item font-[is-m] text-[17px] flex items-center gap-5 relative">
                            <span>Malagasy <span className="txt-30 relative top-px">(Native)</span></span>
                            <svg width="10" height="21" viewBox="0 0 10 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 21L9 1" stroke="#1138FF" />
                            </svg>
                            <span>Français <span className="txt-30 relative top-px">(Fluent)</span></span>
                            <svg width="10" height="21" viewBox="0 0 10 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 21L9 1" stroke="#1138FF" />
                            </svg>
                            <span>English <span className="txt-30 relative top-px">(Fluent)</span></span>
                        </p>
                    </div>
                </div>
            </section>

        </>
    );
};

export default About;
