const prompt = require ("prompt-sync")();
let word = prompt ("Enter any word to check if it's a palindrome word: ");
let reverseWord = ""
for (char of word){
	reverseWord = char + reverseWord;
}
if (reverseWord === word){
	console.log ("It is a a palindrome")
}
else {
	console.log("It is not  a palindrome")
}
