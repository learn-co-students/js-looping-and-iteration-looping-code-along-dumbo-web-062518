// Code your solutions in this file
const badges = ['Ada', 'Brendon', 'Ali'];

function printBadges(array){
  for (let i = 0; i < array.length; i++){
    console.log(`Welcome ${array[i]}! You are employee #${i+1}.`);
  }
  return array;
}

printBadges(badges);

function tailsNeverFails(){
  let coinFlip = Math.random();
  let count = 0;
  while (coinFlip >= 0.5){
		count++
		coinFlip = Math.random()
	}
	return `You got ${count} tails in a row!`
}
