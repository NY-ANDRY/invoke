export default class CursorAnimation {
    constructor(container = null) {
        if (new.target === CursorAnimation) {
            throw new TypeError("Cannot construct Abstract instances directly");
        }
        this.container = container;
    }

    getItem() {
        throw new Error("Method 'getItem()' must be implemented.");
    }

    placeItem(x, y, container = this.container) {
        throw new Error("Method 'placeItem()' must be implemented.");
    }

    morph() {
        throw new Error("Method 'morph()' must be implemented.");
    }

    nextColor() {
        throw new Error("Method 'nextColor()' must be implemented.");
    }
}