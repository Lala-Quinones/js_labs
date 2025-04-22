function maskEmail(email){
  const atPortion = email.indexOf("@");
  const emailUser = email.slice(0, atPortion);
  const domain = email.slice(atPortion);

  const maskMiddle = '*'. repeat(emailUser.length - 2);
  const mask = emailUser[0] + maskMiddle + emailUser[emailUser.length -1]
  return mask + domain;
}
let email = "apple.pie@example.com";
console.log(maskEmail(email));

console.log(maskEmail("freecodecamp@example.com"));
