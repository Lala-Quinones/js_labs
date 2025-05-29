const checkBtn = document.getElementById("check-btn");
const textInput = document.getElementById("text-input");
const result = document.getElementById("result");
const tryAnotherBtn = document.querySelector(".try-another-btn");

function isPalindrome(str) {
    const cleanedStr = str
        .toLowerCase()
        .replace(/[^a-z0-9]/gi, "");
    const reversedStr = cleanedStr
        .split("")
        .reverse()
        .join("");
    return cleanedStr === reversedStr;
}

function resetChecker() {
    textInput.value = "";
    result.textContent = "";
    tryAnotherBtn.style.display = "none";
    textInput.focus();
}

checkBtn.addEventListener("click", () => {
    if (textInput.value === "") {
        alert("Please input a value.");
        return;
    }
    if (isPalindrome(textInput.value)) {
        result.innerHTML = `<b>${textInput.value}</b> is a palindrome!`;
    } else {
        result.innerHTML = `<b>${textInput.value}</b> is not a palindrome!`;
    }
    tryAnotherBtn.style.display = "inline-block";
    textInput.blur();
});

tryAnotherBtn.addEventListener("click", resetChecker);

textInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        checkBtn.click();
    }
    if (event.key === "Escape") {
        resetChecker();
    }
});



