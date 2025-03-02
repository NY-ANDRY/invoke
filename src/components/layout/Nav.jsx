import { useState } from "react";
import BtnNav from "../buttons/BtnNav";

const Nav = ({ ids, pages, show }) => {
    const [selected, setSelected] = useState(false);

    const handleMouseEnter = () => {
        setSelected(true);
    };

    const handleMouseLeave = () => {
        setSelected(false);
    };

    return (
        <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            id="nav"
            className="flex fixed justify-center text-xs tracking-[0px] items-center h-full pr-4 pl-4 top-0 left-0 z-10 overflow-hidden overflow-x-auto"
        >
            <div className="nav-list flex flex-col gap-4">
                {ids && ids.map((id, i) => (
                    <BtnNav key={i} id={id} show={show ? show : selected} />
                ))}
                {pages && pages.map((page, i) => (
                    <BtnNav key={i} page={page} show={show ? show : selected} />
                ))}
            </div>
        </div>
    );
};

export default Nav;
