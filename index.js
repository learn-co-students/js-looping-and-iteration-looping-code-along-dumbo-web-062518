// Code your solutions in this file

const printBadges = (array) => {
  for (let i = 0; i < array.length; i++) {
    console.log(`Welcome ${array[i]}! You are employee #${i+1}.`);
  }
  return array
}

const tailsNeverFails = () => {
  let counter = 0
  while (true) {
    let flip = Math.random()
    if (flip >= 0.5) {
      counter++
    } else {
      break;
    }
  }
  return `You got ${counter} tails in a row!`
}
