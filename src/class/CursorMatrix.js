import gsap from "gsap";
import CursorAnimation from "./CursorAnimation";

export default class CursorMatrix extends CursorAnimation {
    constructor(container = null, fontSize = 14) {
        super(container);
        this.minNumber = 0;
        this.maxNumber = 9;
        this.originalFontSize = fontSize;
        this.fontSize = fontSize;
        this.morphFontSize = true;
        this.maxMorphFontSize = 16;
        this.minMorphFontSize = 14;

        this.colors = ["#1138FF99", "#ffffff99", "#000000"];
        this.icolor = 0;

        this.stop = 4;
        this.nb = 0;
    }

    run() {
        this.nb++;
        if (this.nb >= this.stop) {
            this.nb = 0;
        }
    }

    getRandomNumber() {
        return Math.floor(Math.random() * (this.maxNumber - this.minNumber + 1)) + this.minNumber;
    }

    nextColor() {
        this.icolor = (this.icolor + 1) % this.colors.length;
    }

    morph() {
        this.fontSize += this.morphFontSize ? 1 : -1;
        if (this.fontSize > this.maxMorphFontSize) this.morphFontSize = false;
        if (this.fontSize < this.minMorphFontSize) this.morphFontSize = true;
    }

    getItem() {
        this.morph();
        const numberElement = document.createElement("div");
        numberElement.textContent = this.getRandomNumber();
        numberElement.style.position = "absolute";
        numberElement.style.fontSize = `${this.fontSize}px`;
        numberElement.style.fontWeight = "bold";
        numberElement.style.color = this.colors[this.icolor];
        numberElement.style.pointerEvents = "none";
        return numberElement;
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

        const numberElement = this.getItem();
        numberElement.style.left = `${x - this.fontSize / 2}px`;
        numberElement.style.top = `${y - this.fontSize}px`;

        container.appendChild(numberElement);

        const interval = setInterval(() => {
            numberElement.textContent = this.getRandomNumber();
        }, 100);

        gsap.to(numberElement, {
            y: -20,
            fontSize: 0,
            opacity: 0,
            duration: 1,
            ease: "power2.out",
            onComplete: () => {
                clearInterval(interval);
                numberElement.remove();
            }
        });
    }
}