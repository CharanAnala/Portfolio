function generateFibonacciSeries() {
    const numOfTermsInput = document.getElementById('numOfTerms');
    const fibonacciSeriesResult = document.getElementById('fibonacciSeriesResult');

    // Get the number of terms from the input
    const numOfTerms = parseInt(numOfTermsInput.value);

    // Check if the input is a valid number
    if (isNaN(numOfTerms) || numOfTerms <= 0) {
        fibonacciSeriesResult.textContent = 'Please enter a valid positive integer for the number of terms.';
    } else {
        // Generate Fibonacci series
        const fibonacciSeries = [0, 1];
        for (let i = 2; i < numOfTerms; i++) {
            fibonacciSeries[i] = fibonacciSeries[i - 1] + fibonacciSeries[i - 2];
        }

        fibonacciSeriesResult.textContent = `Fibonacci Series: ${fibonacciSeries.join(', ')}`;
    }
}