let numBetween = parseInt(prompt('How high should our random number go? (Enter a number)'))
while (!numBetween) {
    numBetween = parseInt(prompt('Enter a valid number!'))
}


const randNum = Math.floor(Math.random() * numBetween + 1);

let guess = prompt('Enter your first guess or "q" to quit the game');

let guesses = 1;

while (parseInt(guess) !== randNum) {
    if (guess === 'q') break;
    guess = parseInt(guess)

    if (guess > randNum) {
        guess = prompt('Too high, enter a new guess!')
        guesses++;
    } else if (guess < randNum) {
        guess = prompt('Too low, enter a new guess!')
        guesses++;
    }
    else {
        guess = prompt('Invalid guess, please enter a number or "q" to quit')
    }
}

if (guess === 'q') {
    console.log('Ok quitting game')
} else {
    console.log('CONGRATS YOU WIN!')
    console.log(`You guess correct, it took you ${guesses} guesses.`)
    alert('You win!!!')
}