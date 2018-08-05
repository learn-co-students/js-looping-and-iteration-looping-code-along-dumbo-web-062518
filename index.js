// Code your solutions in this file
function printBadges(array){
	for (var i = 0; i < array.length; i++){
		console.log(`Welcome ${array[i]}! You are employee #${i+1}.`)
	}
	return array
}

function tailsNeverFails(){
	let coinFlip = Math.random()
	let count = 0
	while (coinFlip >= 0.5){
		count++
		coinFlip = Math.random()
	}
	return `You got ${count} tails in a row!`
}