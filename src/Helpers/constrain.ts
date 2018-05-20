import { NumberRange } from "../Classes/Range"

export function constrain(value: number, range:NumberRange) {
    if (value < range.start) return range.start
    if (value > range.end) return range.end
    return value
}