
let firstDigit = 1;
let secondDigit = 0;
let thirdDigit = 0;

for ( firstDigit = 1; firstDigit < 10; firstDigit++ ) {
    for ( secondDigit = 0; secondDigit < 10; secondDigit++ ) { 
        for ( thirdDigit = 0; thirdDigit < 10; thirdDigit++ ){
let square = ( firstDigit * firstDigit ) + ( secondDigit * secondDigit ) + ( thirdDigit * thirdDigit );
let number = ( firstDigit * 100) + ( firstDigit * 10 ) + ( firstDigit );
if ( square == number ) {
console.log(number);
            }
        }
    }
}


