function isPrime(number) {
    if (number <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

function checkPrime() {
    const numberToCheckInput = document.getElementById('numberToCheck');
    const primeResult = document.getElementById('primeResult');

    // Get the value of the number to check from the input
    const numberToCheck = parseInt(numberToCheckInput.value);

    // Check if the input is a valid number
    if (isNaN(numberToCheck)) {
        primeResult.textContent = 'Please enter a valid number.';
    } else {
        // Check if the number is prime
        if (isPrime(numberToCheck)) {
            primeResult.textContent = `${numberToCheck} is a prime number.`;
        } else {
            primeResult.textContent = `${numberToCheck} is not a prime number.`;
        }
    }
}