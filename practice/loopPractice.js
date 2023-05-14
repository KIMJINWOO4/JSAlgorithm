let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);
let sum = 0;
for (let i = 1; i <= n; i++)
    sum += i;
console.log(sum); //#1 합
//consloe.log(n * (n - 1)) / 2;

let fs2 = require('fs');
let input2 = fs2.readFileSync('/dev/stdin').toString().split('\n');

let n2 = Number(input2[0]);

for(let j = 1; j < 10; j++)
{
    console.log(`${n2} * ${j} = ${n2 * j}`); //#2 구구단
}

let fs3 = require('fs');
let input3 = fs3.readFileSync('/dev/stdin').toString().split('\n');

let n3 = Number(input3[0]);
let a = ''
for(let i = 1; i <= n3; i++)
{
    for (let j = 1; j <= i; j++)
        a += '*'
  console.log(a);
  a = '';
} //#3 별찍기

let fs4 = require('fs');
let input4 = fs4.readFileSync('/dev/stdin').toString().split('\n');

let n4 = Number(input4[0]);
let result = '';
for (let i = 1; i <= n4; i++)
{
    let cases = input4[i].split(' ');
    let a = Number(cases[0]);
    let b = Number(cases[1]);
    result += (a + b) + '\n';
}
console.log(result); //#4 빠른 a + b


