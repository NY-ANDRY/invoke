import { useMouse } from "../../contexts/MouseContext";
import SkillFrom from "./SkillFrom";

const SkillList = ({ icon, name, otherClass, from }) => {
    const { setItem, removeItem } = useMouse();

    const divClass = icon
        ? `skill ${otherClass} flex-center gap-3.5 items-center pl-5 pr-6 pt-2 pb-2 z-10 cursor-none`
        : `skill ${otherClass} flex-center items-center pl-5 pr-5 pt-2 pb-2 z-10 cursor-none`;

    const nestedSkills = from && <SkillFrom from={from} />;

    const handleMouseEnter = () => setItem(nestedSkills);
    const handleMouseLeave = () => { removeItem() };

    return (
        <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="skill-group relative flex-center cursor-pointer"
        >
            <div className={divClass}>
                <div className="original flex-center gap-3.5 w-full z-10">
                    {icon && (
                        <div className="img w-[42px] max-w-[42px] max-h-[42px] min-h-[42px] flex-center">
                            <img
                                src={icon ?? "/svg/react.svg"}
                                className="skill-icon max-w-full max-h-full"
                                alt=""
                            />
                        </div>
                    )}
                    <div className="skill-name whitespace-nowrap font-[is-m] text-[20px] tracking-[2px] relative top-px">
                        {name ?? "..."}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SkillList;