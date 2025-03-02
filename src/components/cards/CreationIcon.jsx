import { useMouse } from "../../contexts/MouseContext";

const CreationIcon = ({ icon, name }) => {
    const { setItem, removeItem } = useMouse();

    const nestedName = <div className="cursor-item-up skill pr-2.5 pl-2.5 pt-1 pb-1 text-sm"> {name} </div>

    const handleMouseEnter = () => setItem(nestedName);
    const handleMouseLeave = () => { removeItem() };

    return (
        <>
            <img
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                src={icon}
                className="made-icon flex-center min-w-[24px] max-h-[24px] opacity-80 hover:opacity-100 transition-all cursor-pointer"
            />
        </>
    );
}

export default CreationIcon;