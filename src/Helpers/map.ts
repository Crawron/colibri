import { NumberRange } from '../Classes/Range'
import { constrain } from './constrain';

export function map(originRange: NumberRange, targetRange: NumberRange, value: number, clamp?: boolean) {
    value -= originRange.start

    let result = value * targetRange.length / originRange.length
    result += targetRange.start

    if (clamp) {
        if (targetRange.length >= 0) 
            result = constrain(result, targetRange)
        else 
            result = constrain(result, targetRange.inverse)
    }

    return result
}

export function normalize(range: NumberRange, value: number) {
    return map(range, new NumberRange(0,1), value)
}

export function denormalize(value: number, range: NumberRange) {
    return map(new NumberRange(0,1), range, value)
}