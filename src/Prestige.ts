class Prestige {
    readonly name: string;
    isAvailable = true;

    constructor(name: string) {
        this.name = name;
    }

    toString() {
        return this.name
    }
}

export default Prestige;
