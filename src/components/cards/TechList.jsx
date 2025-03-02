import { useRef, useEffect } from "react";
import gsap from "gsap";
import TurnToMouse from "../boxEffect/TurnToMouse";
import FollowMouse from "../boxEffect/FollowMouse";
import SkillList from "./SkillList";


const TechList = ({ title, skills }) => {

    const techRef = useRef(null);
    const name = title + "-skill";

    useEffect(() => {
        gsap.fromTo(
            "." + name,
            {
                opacity: 0,
                x: -10,
            },
            {
                opacity: 1,
                x: 0,
                duration: 0.4,
                ease: "power4.out",
                stagger: 0.1,
                scrollTrigger: {
                    trigger: techRef.current,
                    start: "top 90%",
                    end: "bottom 10%",
                    toggleActions: "play reverse restart reverse"
                }
            }
        );
    }, []);

    return (
        <div ref={techRef} className="techList w-full flex gap-4">

            <div className="tech-title w-[16%] h-fit border-l-[3.5px] text-[20px] pl-8 primary flex items-center">
                <div className="text-title-txt w-full pt-4 pb-4 font-[is-sb]  break-words whitespace-normal">
                    {title ?? "..."}
                </div>
            </div>

            <div className="tech-list flex flex-1 flex-wrap gap-8 gap-y-6">
                {
                    skills.map((skill, i) => (
                        <FollowMouse key={i} multiX={8} multiY={4}>
                            <TurnToMouse key={i} multi={3}>
                                <SkillList name={skill.name} icon={skill.icon} from={skill.from} otherClass={name} />
                            </TurnToMouse>
                        </FollowMouse>
                    ))
                }
            </div>
        </div>
    )
}

export default TechList;