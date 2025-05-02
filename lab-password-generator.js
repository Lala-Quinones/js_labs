function generatePassword(passwordLength) {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
  let randomPassword = "";
  for (let i=0; i<passwordLength; i++) {
  const randomIndex = Math.floor(Math.random() * characters.length);
  randomPassword += characters[randomIndex];
  }
    return randomPassword;
}

const password = generatePassword(12);
console.log(`Generated password: ${password}`)