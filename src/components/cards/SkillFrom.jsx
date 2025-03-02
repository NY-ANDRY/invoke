import { Fragment } from "react";
import SkillList from "./SkillList";

const SkillFrom = ({ from }) => {

    return (
        <div className="cursor-item flex items-center gap-3.5 relative w-auto overflow-hidden pointer-events-none" >
            {from.map((item, j) => (
                <Fragment key={j}>
                    <SkillList name={item.name} icon={item.icon} />
                    {j !== from.length - 1 && (
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" >
                            <rect x="8" width="4" height="20" rx="2" fill="white" />
                            <path d="M18 8C19.1046 8 20 8.89543 20 10V10C20 11.1046 19.1046 12 18 12L2 12C0.89543 12 -7.31751e-07 11.1046 -6.83469e-07 10V10C-6.35187e-07 8.89543 0.89543 8 2 8L18 8Z" fill="white" />
                        </svg>
                    )}
                </Fragment>
            ))}
        </div>
    );
}

export default SkillFrom;