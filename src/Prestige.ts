class Prestige {
    private readonly _name: string;
    isAvailable = true;

    constructor(name: string) {
        this._name = name;
    }

    toString() {
        return this._name
    }
}

export default Prestige;