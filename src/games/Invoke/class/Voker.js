export default class Voker {

    constructor() {
        this.cur = [0, 1, 2];
        this.list = { "000": 0, "001": 1, "002": 2, "111": 3, "011": 4, "112": 5, "222": 6, "022": 7, "122": 8, "012": 9 };
        this.spell = { 0: "cs", 1: "gw", 2: "iw", 3: "emp", 4: "tornado", 5: "alacrity", 6: "ss", 7: "fs", 8: "cm", 9: "blast" };
    }

    update(orb) {
        if (![0, 1, 2].includes(orb)) {
            throw new Error("Invalid orb value. Only 0, 1, or 2 are allowed.");
        }
        for (let i = this.cur.length - 1; i > 0; i--) {
            this.cur[i] = this.cur[i - 1];
        }
        this.cur[0] = orb;
    }

    invoke() {
        let result = [...this.cur].sort((a, b) => a - b);
        result = result.join("");
        return this.list[result] ?? null;
    }
    getSpell(idc) {
        if (!idc === undefined) {
            return this.spell[idc];
        }
        const spellId = this.invoke();
        return spellId !== null ? this.spell[spellId] : null;
    }
    logState() {
        console.log("Current Orbs:", this.cur);
        console.log("Current Spell:", this.getSpell());
    }

}