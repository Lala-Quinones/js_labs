    const textInput = document.getElementById('text-input');
const charCount = document.getElementById('char-count');
const countValue = document.getElementById('count-value');

textInput.addEventListener('input', () => {
    if (textInput.value.length > 50) {
        textInput.value = textInput.value.slice(0, 50);
    }
    const currentLength = textInput.value.length;
    charCount.textContent = `Character Count: ${currentLength}/50`;

    if (currentLength === 50) {
        charCount.style.color = 'red';
    } else {
        charCount.style.color = '';
    }
});
