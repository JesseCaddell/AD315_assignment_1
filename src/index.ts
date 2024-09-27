
// Function to validate if the value is valid for the given base
function isValidValueForBase(value: string, base: number): boolean {
    let validChars = '';
    if (base <= 10) {
        validChars = '0123456789'.slice(0, base);
    } else {
        validChars = '0123456789ABCDEF'.slice(0, base);
    }
    const regex = new RegExp(`^[${validChars}]+$`, 'i');
    // console.log('Validating value:', value, 'for base:', base);
    // console.log('Valid characters:', validChars);
    // console.log('Regex pattern:', regex);

    const isValid = regex.test(value);
    console.log('Is valid:', isValid);
    return isValid;
}

// Function to convert a number from one base to another
function convertBase(
    value: string,
    from_base: number,
    to_base: number,
): string | null {
    // console.log(`Converting value "${value}" from base ${from_base} to base ${to_base}`);
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
    // console.log('Parsed value:', parsed);
    if (isNaN(parsed)) {
        // console.log('Parsed value is NaN');
        return null;
    }

    // Convert the integer to the to_base
    return parsed.toString(to_base).toUpperCase();
}

// Add event listener to the convert button
const convertButton = document.getElementById("convertButton") as HTMLButtonElement;
convertButton.addEventListener("click", handleConversion);

// Function to handles the conversion when the button is clicked
function handleConversion() {
    const numberInput = document.getElementById("numberInput") as HTMLInputElement;
    const fromBaseInput = document.getElementById("fromBase") as HTMLInputElement;
    const toBaseInput = document.getElementById("toBase") as HTMLInputElement;
    const resultDiv = document.getElementById("result") as HTMLDivElement;

    const value = numberInput.value.trim();
    const fromBase = parseInt(fromBaseInput.value);
    const toBase = parseInt(toBaseInput.value);

    // console.log('Value:', value);
    // console.log('From Base:', fromBase);
    // console.log('To Base:', toBase);

    // Validate the bases
    if (
        !Number.isInteger(fromBase) ||
        !Number.isInteger(toBase) ||
        fromBase < 2 ||
        fromBase > 16 ||
        toBase < 2 ||
        toBase > 16
    ) {
        resultDiv.textContent = 'Bases must be integers between 2 and 16.';
        return;
    }

    // Validate the input number
    if (!value) {
        resultDiv.textContent = 'Please enter a number.';
        return;
    }

    if (!isValidValueForBase(value, fromBase)) {
        resultDiv.textContent = `The number "${value}" is not valid for base ${fromBase}.`;
        return;
    }

    const result = convertBase(value, fromBase, toBase);

    if (result === null) {
        resultDiv.textContent = 'Invalid input or base. Please ensure all inputs are correct.';
    } else {
        resultDiv.textContent = `Result: ${result}`;
    }

}
