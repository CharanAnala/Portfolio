function convertToUppercase() {
    const textInput = document.getElementById('textInput');
    const convertedText = document.getElementById('convertedText');

    // Get the text from the input
    const originalText = textInput.value;

    // Check if the input text is not empty
    if (originalText.trim() === '') {
        convertedText.textContent = 'Please enter some text.';
    } else {
        // Convert the text to uppercase
        const uppercaseText = originalText.toUpperCase();

        convertedText.textContent = `Uppercase Text: ${uppercaseText}`;
    }
}