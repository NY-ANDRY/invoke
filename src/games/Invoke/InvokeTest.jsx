import { useState, useEffect } from 'react';
import { useInvoke } from './InvokeContext';

import alacrity from './img/alacrity.jpg';
import blast from './img/blast.jpg';
import cm from './img/cm.jpg';
import cs from './img/cs.jpg';
import emp from './img/emp.jpg';
import fs from './img/fs.jpg';
import gw from './img/gw.jpg';
import iw from './img/iw.jpg';
import ss from './img/ss.jpg';
import tornado from './img/tornado.jpg';

const InvokeTest = () => {

    const { currentSpell } = useInvoke();
    const spellImages = {
        alacrity, blast, cm, cs, emp, fs, gw, iw, ss, tornado
    };
    console.log(spellImages);

    return (
        <>
            <div className="spell-list flex items-center justify-center">
                <img src={spellImages[currentSpell]} className="invoker-img-lg" alt="" />
            </div>
        </>
    );
}

export default InvokeTest;