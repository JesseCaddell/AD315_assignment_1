/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/converter.ts":
/*!**************************!*\
  !*** ./src/converter.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   convertBase: () => (/* binding */ convertBase),
/* harmony export */   isValidValueForBase: () => (/* binding */ isValidValueForBase)
/* harmony export */ });
// Function to validate if the value is valid for the given base
function isValidValueForBase(value, base) {
    var validChars = '';
    if (base <= 10) {
        validChars = '0123456789'.slice(0, base);
    }
    else {
        validChars = '0123456789ABCDEF'.slice(0, base);
    }
    var regex = new RegExp("^[".concat(validChars, "]+$"), 'i');
    return regex.test(value);
}
// Function to convert a number from one base to another
function convertBase(value, from_base, to_base) {
    // Validate bases
    if (!Number.isInteger(from_base) ||
        !Number.isInteger(to_base) ||
        from_base < 2 ||
        from_base > 16 ||
        to_base < 2 ||
        to_base > 16) {
        return null;
    }
    // Parse the value to an integer using the from_base
    var parsed = parseInt(value, from_base);
    if (isNaN(parsed)) {
        return null;
    }
    // Convert the integer to the to_base
    return parsed.toString(to_base).toUpperCase();
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _converter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./converter */ "./src/converter.ts");

// Debounce function to limit rate of function calls
function debounce(func, wait) {
    var timeout;
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var context = this; // Capture the context
        clearTimeout(timeout);
        timeout = window.setTimeout(function () { return func.apply(context, args); }, wait);
    };
}
// Declare variables so accessible everywhere
var numberInput = document.getElementById("numberInput");
var fromBaseSelect = document.getElementById("fromBase");
var toBaseSelect = document.getElementById("toBase");
var resultDiv = document.getElementById("result");
// Function to handles the conversion when the button is clicked
function handleConversion() {
    var value = numberInput.value.trim();
    var fromBase = parseInt(fromBaseSelect.value);
    var toBase = parseInt(toBaseSelect.value);
    // Validate the bases
    if (!Number.isInteger(fromBase) ||
        !Number.isInteger(toBase) ||
        fromBase < 2 ||
        fromBase > 16 ||
        toBase < 2 ||
        toBase > 16) {
        resultDiv.textContent = 'Bases must be integers between 2 and 16.';
        return;
    }
    // Validate the input number
    if (!value) {
        resultDiv.textContent = '';
        return;
    }
    if (!(0,_converter__WEBPACK_IMPORTED_MODULE_0__.isValidValueForBase)(value, fromBase)) {
        resultDiv.textContent = "The number \"".concat(value, "\" is not valid for base ").concat(fromBase, ".");
        return;
    }
    var result = (0,_converter__WEBPACK_IMPORTED_MODULE_0__.convertBase)(value, fromBase, toBase);
    if (result === null) {
        resultDiv.textContent = 'Invalid input or base. Please ensure all inputs are correct.';
    }
    else {
        resultDiv.textContent = "Result: ".concat(result);
    }
}
// Debounced version of handleConversion
var debouncedHandleConversion = debounce(handleConversion, 300);
// Event Listeners for input fields and dropdowns
numberInput.addEventListener("input", debouncedHandleConversion);
fromBaseSelect.addEventListener("change", handleConversion);
toBaseSelect.addEventListener("change", handleConversion);

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map