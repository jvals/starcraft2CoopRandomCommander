import type Prestige from "./Prestige";

class Commander {
    private readonly _prestiges: Prestige[];
    readonly name: string;
    private readonly _shortName: string
    constructor(name: string, prestiges: Prestige[], _shortName: string | undefined = undefined) {
        this.name = name;
        this._prestiges = prestiges;
        this._shortName = _shortName ?? name
    }

    get suggestedPrestige(): Prestige {
        return this.getRandomPrestige();
    }

    getLinkToSC2Coop() {
        return `https://starcraft2coop.com/commanders/${this._shortName.toLowerCase()}#buildOrder`
    }

    private getRandomPrestige(): Prestige {
        const idx = Math.floor(Math.random()*this._prestiges.length);
        return this._prestiges[idx];
    }

}

export default Commander;