import { isValidValueForBase, convertBase } from '../src/index';

describe('Base Converter Tests', () => {
    // Normal test Cases
    test('Decimal to Binary Conversion', () => {
        expect(convertBase('255', 10, 2)).toBe('11111111')
    });
    test('Hexadecimal to Decimal Conversion', () => {
        expect(convertBase('1A3F', 16, 10)).toBe('6719');
    });

    test('Binary to Octal Conversion', () => {
        expect(convertBase('1101011', 2, 8)).toBe('153');
    });

    // Edge Test Cases
    test('Empty Input Number', () => {
        expect(convertBase('', 10, 2)).toBeNull();
    });

    test('Invalid Characters in Input Number', () => {
        const isValid = isValidValueForBase('GHI', 16);
        expect(isValid).toBe(false);
    });

    test('Base Out of Range (From Base)', () => {
        expect(convertBase('1010', 1, 2)).toBeNull();
    });

    test('Base Out of Range (To Base)', () => {
        expect(convertBase('1010', 2, 17)).toBeNull();
    });
})