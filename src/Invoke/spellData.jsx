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
import quas from './img/quas.jpg';
import wex from './img/wex.jpg';
import exort from './img/exort.jpg';
import mix from './img/invoke.jpg';

export const spellName = ["cs", "gw", "iw", "emp", "tornado", "alacrity", "ss", "fs", "cm", "blast"];
export const spellImages = { alacrity, blast, cm, cs, emp, fs, gw, iw, ss, tornado };
export const QuasWexExort = { quas, wex, exort, mix };
export const spellDescription = {
    "cs": { "name": "Cold Snap", "description": "Freezes the target, dealing damage and making them stumble with each hit received." },
    "gw": { "name": "Ghost Walk", "description": "Turns Invoker invisible and slows nearby enemies based on Quas and Wex levels." },
    "iw": { "name": "Ice Wall", "description": "Creates a wall of ice that slows and damages enemies passing through it." },
    "emp": { "name": "EMP", "description": "Releases an electromagnetic pulse after a delay, draining enemy mana and dealing damage based on the mana drained." },
    "tornado": { "name": "Tornado", "description": "Launches a tornado that lifts enemies into the air and deals damage based on the lift duration." },
    "alacrity": { "name": "Alacrity", "description": "Grants an allied unit increased attack speed and attack damage for a duration." },
    "ss": { "name": "Sun Strike", "description": "Focuses solar energy at a point, dealing heavy pure damage to enemies in the impact zone." },
    "fs": { "name": "Forge Spirit", "description": "Summons one or two forge spirits that deal ranged damage and reduce enemy armor on attacks." },
    "cm": { "name": "Chaos Meteor", "description": "Summons a meteor that rolls forward, dealing damage along its path and burning enemies hit." },
    "blast": { "name": "Deafening Blast", "description": "Unleashes a shockwave that knocks back enemies, dealing damage and disarming them for a duration." }
};