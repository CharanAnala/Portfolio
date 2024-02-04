function isPalindrome(str) {
    const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    const reversedStr = cleanedStr.split('').reverse().join('');
    return cleanedStr === reversedStr;
}

function checkPalindrome() {
    const inputString = document.getElementById('inputString');
    const palindromeResult = document.getElementById('palindromeResult');

    // Get the value of the input string
    const str = inputString.value;

    // Check if the input string is not empty
    if (str.trim() === '') {
        palindromeResult.textContent = 'Please enter a non-empty string.';
    } else {
        // Check if the string is a palindrome
        if (isPalindrome(str)) {
            palindromeResult.textContent = `"${str}" is a palindrome.`;
        } else {
            palindromeResult.textContent = `"${str}" is not a palindrome.`;
        }
    }
}