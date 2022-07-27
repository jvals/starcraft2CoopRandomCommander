class Prestige {
    readonly name: string;
    private _isAvailable = true;

    constructor(name: string) {
        this.name = name;
        this._isAvailable = this.getInitialAvail()
    }

    get isAvailable(): boolean {
        return this._isAvailable;
    }

    set isAvailable(value: boolean) {
        localStorage.setItem(this.name, String(value))
        this._isAvailable = value;
    }

    private getInitialAvail(): boolean {
        const maybeAvail: string | null = localStorage.getItem(this.name)
        if (maybeAvail !== null) {
            return maybeAvail === "true"
        } else {
            return this._isAvailable
        }
    }

    toString() {
        return this.name
    }

    reset() {
        this._isAvailable = true
    }
}

export default Prestige;
