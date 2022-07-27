import type Prestige from "./Prestige";

class Commander {
    readonly prestiges: Prestige[];
    readonly name: string;
    private readonly _shortName: string
    private _isAvailable = true;

    constructor(name: string, prestiges: Prestige[], _shortName: string | undefined = undefined) {
        this.name = name;
        this.prestiges = prestiges;
        this._shortName = _shortName ?? name
        this._isAvailable = this.getInitialAvail()
    }

    get isAvailable(): boolean {
        return this._isAvailable;
    }
    set isAvailable(value: boolean) {
        localStorage.setItem(this.name, String(value))
        this._isAvailable = value;
    }

    get suggestedPrestige(): Prestige {
        return this.getRandomPrestige();
    }

    getLinkToSC2Coop() {
        return `https://starcraft2coop.com/commanders/${this._shortName.toLowerCase()}#buildOrder`
    }

    reset() {
        this._isAvailable = true
    }

    private getInitialAvail(): boolean {
        const maybeAvail: string | null = localStorage.getItem(this.name)
        if (maybeAvail !== null) {
            return maybeAvail === "true"
        } else {
            return this._isAvailable
        }
    }

    private getRandomPrestige(): Prestige {
        const availablePrestiges = this.prestiges.filter(prestige => prestige.isAvailable)
        const idx = Math.floor(Math.random()*availablePrestiges.length);
        return availablePrestiges[idx];
    }
}

export default Commander;
