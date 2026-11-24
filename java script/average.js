const prompt = require ("prompt-sync")();
let total = 0;
let counter = 0;
while (true){
	let number = Number(prompt("Enter number or -1 to stop): "))
	if (number == -1){
	console.log ("The overall average is " + average)
		break
	}
	else {
		counter ++;
		total+= number;
		average = sum / counter;
		console.log ("Current Average = " + average)
	}
	
}
