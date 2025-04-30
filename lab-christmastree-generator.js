

function pyramid(character, count, inverted) {
  function padRow(rowNumber, rowCount) {  
    const spaces = " ".repeat(rowCount - rowNumber);
    const chars = character.repeat(2 * rowNumber - 1);
    return spaces + chars
    
    ;}


const rows = [];
  for (let i = 1; i <= count; i++) {
    const row = inverted
      ? padRow(count - i + 1, count) 
      : padRow(i, count);          
    rows.push(row);
  }

  return "\n" + rows.join("\n") + "\n"; 
}

const result = pyramid("%", 5, false);
console.log(result);
