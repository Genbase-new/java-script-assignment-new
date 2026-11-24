const prompt = require('prompt-sync')();

let word = prompt("Enter any word ");
	for(let char= 0; char <= word.length; char++ ){
console.log(${word.charAt(char)});
}
