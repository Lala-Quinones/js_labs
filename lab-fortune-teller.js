const fortune1 = "A mysterious adventure awaits you—pack snacks.";
const fortune2 = "Someone you haven’t met yet will change your life forever.";
const fortune3 = "You’ll soon laugh at something you shouldn’t… and it’ll be worth it.";
const fortune4 = "Unexpected good news is coming your way—check your inbox!";
const fortune5 = "Your lucky number today is hidden in plain sight.";
const min = 1;
const max = 5;
const randomNumber = Math.ceil(Math.random() * (max-min));

let selectedFortune;
if (randomNumber == 1) {
  selectedFortune = fortune1;
}
else if (randomNumber == 2) {
  selectedFortune = fortune2;
}
else if (randomNumber == 3) {
  selectedFortune = fortune3;
}
else if (randomNumber == 4) {
  selectedFortune = fortune4;
}
else if (randomNumber == 5) {
  selectedFortune = fortune5;
}
console.log(selectedFortune);
