const prompt = require('prompt-sync')();

let attempt = 5, guess = 50;
while(attempt >= 1 ){
	let number = Number(prompt("Guess a number from 1 to 100: "))
	if(number == guess){
		console.log("Congratulations you just won!")
	}else{
	attempt--
	console.log('Number of attempts left are' + attempt);
	
	}
	
}
