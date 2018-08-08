// Code your solutions in this file
const gifts = ['teddy bear', 'drone', 'doll']

function wrapGifts(gifts){
  for(let i=0; i<gifts.length;i++){
    console.log(`Wrapped ${gifts[i]} and added a pretty bow.`);
  }
  return gifts
}

wrapGifts(gifts)


function printBadges(badges){
  for(let i=0; i<badges.length;i++){
    console.log(`Welcome ${badges[i]}! You are employee #${i+1}.`);
  }
  return badges
}

printBadges(['Ada', 'Brendan', 'Ali']);

function tailsNeverFails(){
  let tails = 0
  let num = function () { return Math.random() >= 0.5}
    while(num()){
      tails++
    }
    return `You got ${tails} tails in a row!`
}
