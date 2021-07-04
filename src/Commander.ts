import type Prestige from "./Prestige";

class Commander {
    private readonly _prestiges: Prestige[];
    readonly name: string;
    private readonly _shortName: string
    private _suggestedPrestige: Prestige | undefined;
    constructor(name: string, prestiges: Prestige[], _shortName: string | undefined = undefined) {
        this.name = name;
        this._prestiges = prestiges;
        this._shortName = _shortName ?? name
    }

    get suggestedPrestige(): Prestige {
        return this._suggestedPrestige ?? this.updateAndGetRandomPrestige();
    }

    set suggestedPrestige(value: Prestige) {
        this._suggestedPrestige = value;
    }

    getLinkToSC2Coop() {
        return `https://starcraft2coop.com/commanders/${this._shortName.toLowerCase()}#buildOrder`
    }

    private updateAndGetRandomPrestige(): Prestige {
        const idx = Math.floor(Math.random()*this._prestiges.length);
        const randomPrestige = this._prestiges[idx];
        this._suggestedPrestige =  randomPrestige;
        return randomPrestige;
    }

}

export default Commander;