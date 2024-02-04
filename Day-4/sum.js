function calculateSum() {
    const nInput = document.getElementById('nInput');
    const sumResult = document.getElementById('sumResult');

    // Get the value of n from the input
    const nValue = parseInt(nInput.value);

    // Check if the input is a valid number
    if (isNaN(nValue) || nValue <= 0) {
        sumResult.textContent = 'Please enter a valid positive integer for n.';
    } else {
        // Calculate the sum of the first n numbers
        const sum = (nValue * (nValue + 1)) / 2;

        sumResult.textContent = `The sum of the first ${nValue} numbers is: ${sum}.`;
    }
}