function isDivisibleBy7(number) {
  return number % 7 === 0;
}

function checkDivisibility() {
  const inputElement = document.getElementById('numberInput');
  const resultElement = document.getElementById('result');

  // Get the value from the input
  const inputValue = parseInt(inputElement.value);

  // Check if the input is a valid number
  if (isNaN(inputValue)) {
      resultElement.textContent = 'Please enter a valid number.';
  } else {
      // Check divisibility
      if (isDivisibleBy7(inputValue)) {
          resultElement.textContent = `${inputValue} is divisible by 7.`;
      } else {
          resultElement.textContent = `${inputValue} is not divisible by 7.`;
      }
  }
}
