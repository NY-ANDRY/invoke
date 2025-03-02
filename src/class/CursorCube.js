import gsap from "gsap";
import CursorAnimation from "./CursorAnimation";

export default class CursorCube extends CursorAnimation {
    constructor(width = 10, height = 10, container = null) {
        super(container);
        this.originalWidth = width;
        this.originalHeight = height;
        this.width = width;
        this.height = height;
        this.colors = ["#1138FF99", "#ffffff99", "#000000"];
        this.icolor = 0;

        this.morphWidth = true;
        this.morphHeight = true;
        this.maxMorphWidth = 1.5;
        this.minMorphWidth = 0.8;
        this.maxMorphHeight = 1.5;
        this.minMorphHeight = 0.8;

        this.stop = 4;
        this.nb = 0;
    }

    run() {
        this.nb++;
        if (this.nb >= this.stop) {
            this.nb = 0;
        }
    }

    nextColor() {
        this.icolor++;
        if (this.icolor >= this.colors.length) {
            this.icolor = 0;
        }
    }

    morph() {
        const isWidth = Math.random() < 0.5;
        const prop = isWidth ? "width" : "height";
        const morphFlag = isWidth ? "morphWidth" : "morphHeight";
        const maxMorph = isWidth ? this.maxMorphWidth : this.maxMorphHeight;
        const minMorph = isWidth ? this.minMorphWidth : this.minMorphHeight;
        const original = isWidth ? this.originalWidth : this.originalHeight;

        this[prop] += this[morphFlag] ? 1 : -1;
        this[morphFlag] = this[prop] > original * maxMorph ? false : this[prop] < original * minMorph ? true : this[morphFlag];
    }

    getItem() {
        const cube = document.createElement("div");
        cube.style.position = "absolute";
        cube.style.width = `${this.width}px`;
        cube.style.height = `${this.height}px`;
        cube.style.border = `2px solid ${this.colors[this.icolor]}`;
        cube.style.backgroundColor = "transparent";
        cube.style.borderRadius = "0px";
        cube.style.pointerEvents = "none";
        return cube;
    }

    placeItem(x, y, container = this.container, force = false) {
        if (typeof gsap === 'undefined') {
            console.log('GSAP is not defined. I cannot work.');
            return;
        }
        if (!container) {
            console.log('Where do I put it?');
            return;
        }
        this.run();
        if (this.nb != 0 && !force) {
            return;
        }

        const cube = this.getItem();
        cube.style.left = `${x - this.width / 2}px`;
        cube.style.top = `${y - this.height / 2}px`;

        container.appendChild(cube);

        gsap.to(cube, {
            rotationZ: 360,
            width: 0,
            height: 0,
            opacity: 0,
            duration: 1,
            ease: "power2.out",
            onComplete: () => {
                cube.remove();
            }
        });
    }
}