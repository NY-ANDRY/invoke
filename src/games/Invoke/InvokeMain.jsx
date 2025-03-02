import { useRef, useState, useEffect } from 'react';
import { useInvoke } from './InvokeContext';
import gsap from 'gsap';

import placeholder from './img/placeholder.svg';

const InvokeMain = () => {
    const list = useRef(null);
    const { currentSpells } = useInvoke();

    return (
        <div className="spell-list flex items-center justify-center relative w-[50vw]">
            <div ref={list} className="flex relative">
                <div className="flex gap-2">
                    <img src={currentSpells[0].image ?? placeholder} className="invoker-img-lg transform scale-70 opacity-25" alt="" />
                    <img src={currentSpells[1].image ?? placeholder} className="invoker-img-lg transform scale-85 opacity-50" alt="" />
                    <img src={currentSpells[2].image ?? placeholder} className="invoker-img-lg ml-4 mr-4" alt="" />
                    <img src={currentSpells[3].image ?? placeholder} className="invoker-img-lg transform scale-85 opacity-50" alt="" />
                    <img src={currentSpells[4].image ?? placeholder} className="invoker-img-lg transform scale-70 opacity-25" alt="" />
                </div>
            </div>
        </div>
    );
};

export default InvokeMain;
