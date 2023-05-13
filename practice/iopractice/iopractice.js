console.log("Hello World!"); //#1 Hello World! 출력

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let line = input.split(' ');

let a = parseInt(line[0]);
let b = parseInt(line[1]);
console.log(a + b); //#2 a + b

let fs2 = require('fs');
let input2 = fs2.readFileSync('/dev/stdin').toString().split('\n');
let line2 = input2.split(' ');

let a2 = Number(line2[0]);
let b2 = Number(line2[1]); 

console.log(a2 * b2); //#3 a x b

let fs3 = require('fs');
let input3 = fs3.readFileSync('\dev\stdin').toString.split('\n');

let a3 = Number(input3.split(' ')[0]);
let b3 = Number(input3.split(' ')[1]);

console.log(a3 + b3);
console.log(a3 - b3);
console.log(a3 * b3);
console.log(parseInt(a3 / b3));
console.log(a3 % b3); // #4 사칙연산

let fs4 = require('fs');
let input4 = fs.readFileSync('/dev/stdin').toString().split('\n');

for(let i = 2; i > -1; i--){
    console.log((Number(input4[0])) * Number(input4[1][i]))
}
console.log(Number(input4[0]) * Number(input4[1])) //#5 곱셈



