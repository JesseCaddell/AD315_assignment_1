// Function to validate if the value is valid for the given base
export function isValidValueForBase(value: string, base: number): boolean {
    let validChars = '';
    if (base <= 10) {
        validChars = '0123456789'.slice(0, base);
    } else {
        validChars = '0123456789ABCDEF'.slice(0, base);
    }
    const regex = new RegExp(`^[${validChars}]+$`, 'i');
    return regex.test(value);
}

// Function to convert a number from one base to another
export function convertBase(
    value: string,
    from_base: number,
    to_base: number,
): string | null {
    // Validate bases
    if (
        !Number.isInteger(from_base) ||
        !Number.isInteger(to_base) ||
        from_base < 2 ||
        from_base > 16 ||
        to_base < 2 ||
        to_base > 16
    ) {
        return null;
    }

    // Parse the value to an integer using the from_base
    const parsed = parseInt(value, from_base);
    if (isNaN(parsed)) {
        return null;
    }

    // Convert the integer to the to_base
    return parsed.toString(to_base).toUpperCase();
}