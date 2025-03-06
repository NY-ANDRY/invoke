import { useRef, useState, useLayoutEffect } from "react";
import Filtre1 from "../icons/Filtre1";
import gsap from "gsap";

const BtnFiltre = ({ name, onClick }) => {
    const fillColor = ["#6A6A6C", "#dddddd"];
    const ref = useRef(null);
    const [selected, setSelected] = useState(false);
    const [isRotate, setIsRotate] = useState(false);

    useLayoutEffect(() => {
        if (!ref.current) return;

        const ctx = gsap.context(() => {
            if (selected) {
                gsap.to(ref.current, {
                    rotation: -180,
                    duration: 0.6,
                    ease: "power4.out"
                });
                setIsRotate(true);
            } else if (isRotate) {
                gsap.killTweensOf(ref.current);
                gsap.to(ref.current, { rotation: 180 });
                setIsRotate(false);
            }
        });

        return () => ctx.revert();
    }, [selected]);

    return (
        <button onMouseEnter={() => { setSelected(true) }} onMouseLeave={() => { setSelected(false) }} onClick={onClick} className="flex items-center gap-2 cursor-pointer">
            <span className="transition-all" style={{ color: selected ? fillColor[1] : fillColor[0] }}>{name}</span>
            <div ref={ref} className="filtre-icon">
                <Filtre1 selected={selected} />
            </div>
        </button>
    );
}

export default BtnFiltre;