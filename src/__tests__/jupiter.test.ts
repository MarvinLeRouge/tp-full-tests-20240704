import { expect, describe, test } from 'vitest';
import { calcHour, hourLabel } from '../modules/jupiter';

describe('Calc hour', () => {
    test('L1T1S1 = ', () => {
        expect(calcHour(1,1,1)).toBe(0);
    });
    test('L1T1S2 = ', () => {
        expect(calcHour(1,1,2)).toBe(5);
    });
    test('L1T2S1 = ', () => {
        expect(calcHour(1,2,1)).toBe(0);
    });
    test('L2T1S1 = ', () => {
        expect(calcHour(2,1,1)).toBe(1);
    });
    test('L2T1S2 = ', () => {
        expect(calcHour(2,1,2)).toBe(4);
    });
    test('L2T2S1 = ', () => {
        expect(calcHour(2,2,1)).toBe(1);
    });
    describe('T2S2 values', () => {
        test('L1T2S2 = ', () => {
            expect(calcHour(1,2,2)).toBe(6);
        });
        test('L2T2S2 = ', () => {
            expect(calcHour(2,2,2)).toBe(6);
        });
    });
});
describe('Calc hour', () => {
    describe("Mortin", () => {
        test("H0", () => {
            expect(hourLabel(0)).toBe("mortin");
        });
        test("H1", () => {
            expect(hourLabel(1)).toBe("mortin");
        });
    });
    describe("Aprenoon", () => {
        test("H4", () => {
            expect(hourLabel(4)).toBe("aprenoon");
        });
    });
    describe("Soirning", () => {
        test("H5", () => {
            expect(hourLabel(5)).toBe("soirning");
        });
    });
    describe("Nuight", () => {
        test("H6", () => {
            expect(hourLabel(6)).toBe("nuight");
        });
    });
});