function areMultiples(a, b, c) {
    return a % c === 0 && b % c === 0;
}

function checkMultiples() {
    const numberAInput = document.getElementById('numberA');
    const numberBInput = document.getElementById('numberB');
    const numberCInput = document.getElementById('numberC');
    const multiplesResult = document.getElementById('multiplesResult');

    // Get the values of a, b, and c from the inputs
    const a = parseInt(numberAInput.value);
    const b = parseInt(numberBInput.value);
    const c = parseInt(numberCInput.value);

    // Check if the inputs are valid numbers
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        multiplesResult.textContent = 'Please enter valid numbers for a, b, and c.';
    } else {
        // Check if a and b are multiples of c
        if (areMultiples(a, b, c)) {
            multiplesResult.textContent = `${a} and ${b} are multiples of ${c}.`;
        } else {
            multiplesResult.textContent = `${a} and ${b} are not multiples of ${c}.`;
        }
    }
}
