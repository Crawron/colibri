export class NumberRange {
    start: number
    end: number

    constructor(start: number, end: number) {
        this.start = start
        this.end = end
    }

    get length() {
        return this.end - this.start
    }

    get inverse() {
        return new NumberRange(this.end, this.start)
    }
}