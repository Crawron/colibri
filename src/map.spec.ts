import { map, normalize, denormalize } from './Helpers/map'
import { NumberRange } from './Classes/Range';


describe("Testing the map function", () => {
    test("[0, 1]1   -> [0, 100]100", () => {
        const origin = new NumberRange(0, 1)
        const target = new NumberRange(0, 100)
        expect(map(origin, target, 1)).toBe(100)
    })

    test("[0, 1]0.5 -> [0, 100]50", () => {
        const origin = new NumberRange(0, 1)
        const target = new NumberRange(0, 100)
        expect(map(origin, target, 1)).toBe(100)
    })

    test("[1, 2]3   -> [1, 0]-1", () => {
        const origin = new NumberRange(1, 2)
        const target = new NumberRange(1, 0)
        expect(map(origin, target, 3)).toBe(-1)
    })

    test("[0, 1]2   -> [0, 2]4", () => {
        const origin = new NumberRange(0, 1)
        const target = new NumberRange(0, 2)
        expect(map(origin, target, 2)).toBe(4)
    })

    test("[0, 1]-1  -> [2, 0]4", () => {
        const origin = new NumberRange(0, 1)
        const target = new NumberRange(2, 0)
        expect(map(origin, target, -1)).toBe(4)
    })

    test("[0, 1]2   -> [0, 2]2 (constrain)", () => {
        const origin = new NumberRange(0, 1)
        const target = new NumberRange(0, 2)
        expect(map(origin, target, 2, true)).toBe(2)
    })

    test("[0, 1]-1  -> [2, 0]2 (constrain)", () => {
        const origin = new NumberRange(0, 1)
        const target = new NumberRange(2, 0)
        expect(map(origin, target, -1, true)).toBe(2)
    })
})

describe("normalize and denormalize", () => {
    test("[0, 100]25 -> 0.25", () => {
        const range = new NumberRange(0, 100)
        expect(normalize(range, 25)).toBe(0.25)
        expect(denormalize(0.25, range)).toBe(25)
    })

    test("[100, 0]100 -> 0", () => {
        const range = new NumberRange(100, 0)
        expect(normalize(range, 100)).toBe(0)
        expect(denormalize(0, range)).toBe(100)
    })

    test("[20, 21]20.5 -> 0.5", () => {
        const range = new NumberRange(20, 21)
        expect(normalize(range, 20.5)).toBe(0.5)
        expect(denormalize(0.5, range)).toBe(20.5)
    })
})