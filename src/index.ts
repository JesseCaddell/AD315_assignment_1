
// Function to validate if the value is valid for the given base
function isValidValueForBase(value: string, base: number): boolean {
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

// // Add event listener to the convert button
// const convertButton = document.getElementById("convertButton") as HTMLButtonElement;
// convertButton.addEventListener("click", handleConversion);


// Debounce function to limit rate of function calls
function debounce(func: Function, wait: number) {
    let timeout: number | undefined;
    return function (this: any, ...args: any[]) {
        const context = this; // Capture the context
        clearTimeout(timeout);
        timeout = window.setTimeout(() => func.apply(context, args), wait);
    };
}

// Declare variables so accessible everywhere
const numberInput = document.getElementById("numberInput") as HTMLInputElement;
const fromBaseSelect = document.getElementById("fromBase") as HTMLSelectElement;
const toBaseSelect = document.getElementById("toBase") as HTMLSelectElement;
const resultDiv = document.getElementById("result") as HTMLDivElement;

// Function to handles the conversion when the button is clicked
function handleConversion() {
    const value = numberInput.value.trim();
    const fromBase = parseInt(fromBaseSelect.value);
    const toBase = parseInt(toBaseSelect.value);


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
        resultDiv.textContent = '';
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

// Debounced version of handleConversion
const debouncedHandleConversion = debounce(handleConversion, 300);

// Event Listeners for input fields and dropdowns
numberInput.addEventListener("input", debouncedHandleConversion);
fromBaseSelect.addEventListener("change", handleConversion);
toBaseSelect.addEventListener("change", handleConversion);

