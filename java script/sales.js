let annual = ( 30000 - 5000);
let fixed = (6/100 * 5000) + (8/100 * 5000);
annual -= fixed;
let sales = (10/100 * 10000);
let Count = 2;
while (annual > 0) {
annual-= sales
Count++;
}
console.log("We need to make "+ Count + " sales");
