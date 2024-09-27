

// Function to convert a number from one base to another
function convertBase(
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

    if (!value) {
        resultDiv.textContent = 'Please enter a number.';
        return;
    }

    const result = convertBase(value, fromBase, toBase);

    if (result === null) {
        resultDiv.textContent = 'Invalid input or base. Please ensure all inputs are correct.';
    } else {
        resultDiv.textContent = `Result: ${result}`;
    }

}
