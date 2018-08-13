// Code your solutions in this file
function printBadges(namesArray) {
  for (var i = 0; i < namesArray.length; i++) {
    console.log(`Welcome ${namesArray[i]}! You are employee #${i+1}.`)
  }
  return namesArray;
}

function tailsNeverFails() {
  let isTails = Math.random() >= 0.5;
  let tailsflips = 0;
  while (isTails) {
    tailsflips++;
    isTails = Math.random() >= 0.5;
  }
  return `You got ${tailsflips} tails in a row!`;
}
