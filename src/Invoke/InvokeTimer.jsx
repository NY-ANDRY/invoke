import { col } from "framer-motion/client";
import { useInvoke } from "./InvokeContext";
import { useState, useEffect } from "react";

const InvokeTimer = () => {
    const { remainingTime, combo } = useInvoke();
    const color = ["#3D64FF", "#EF3DFF", "#FF3D3D"];
    const [focus, setFocus] = useState(0);
    useEffect(() => {
        if (combo <= 4) {
            setFocus(0);
        } else if (combo <= 9) {
            setFocus(1);
        } else {
            setFocus(2);
        }
    }, [combo]);

    return (
        <>
            <div className="flex items-center justify-center relative w-full">
                <div className="time font-[is-sb] text-3xl lg:text-4xl p-6">{remainingTime}</div>
                <div id="combo" className="absolute font-[is-m] left-[70%] text-3xl lg:text-4xl" style={{ color: color[focus] }}>{combo > 0 && "x" + combo}</div>
            </div>
        </>
    )
}

export default InvokeTimer;