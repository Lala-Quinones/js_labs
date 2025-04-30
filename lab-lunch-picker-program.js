const lunches = [];
lunches.push("🌮 Tacos", "🍲 Soup");
function addLunchToEnd(arr, item) {
  arr.push(item);
  console.log(`${item} added to the end of the lunch menu.`
)
  return arr;
}


function addLunchToStart(arr, item) {
  arr.unshift(item);
  console.log(`${item} added to the start of the lunch menu.`)
  return arr;
}

function removeLastLunch(arr) {
  if(arr.length === 0) {
    console.log("No lunches to remove.")
  }
  else {
    const removeItem = arr.pop();
    console.log(`${removeItem} removed from the end of the lunch menu.`) 
  }
  return arr;
}
function removeFirstLunch(arr) {
  if(arr.length === 0) {
    console.log("No lunches to remove.")
  }
  else {
    const removeItem = arr.shift();
    console.log(`${removeItem} removed from the start of the lunch menu.`) 
  }
  return arr;
}

function getRandomLunch(arr) {
  if(arr.length === 0) {
    console.log("No lunches available.");
  }
  else {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const randomItem = arr[randomIndex];
    console.log(`Randomly selected lunch: ${randomItem}`); 
  }
  return arr;
}

function showLunchMenu (arr) {
  if(arr.length === 0) {
    console.log("The menu is empty.")
  }
  else {
    console.log(`Menu items: ${arr.join(", ")}`) 
  }
    return arr;
  }

let updatedLunches = addLunchToEnd(lunches, "🍔 Burger");
console.log(updatedLunches);

updatedLunches = addLunchToStart(lunches, "🥪 Sandwich");

addLunchToStart(lunches, "🍣 Sushi");
console.log(updatedLunches);

console.log(showLunchMenu(lunches));

