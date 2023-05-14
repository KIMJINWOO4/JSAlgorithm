let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let score = Number(input[0]);

if (score <= 100 && score >= 90)
    console.log('A');
else if (score <= 89 && score >= 80)
    console.log('B');
else if (score <= 79 && score >= 70)
    console.log('C')
else if (score <= 69 && score >= 60)
    console.log('D')
else
    console.log('F') //#1 시험 성적

let fs2 = require('fs')
let input2 = fs2.readFileSync('/dev/stdin').toString().split('\n');

let hour = Number(input2[0].split(' ')[0]);
let min = Number(input2[0].split(' ')[1]);

if (min >= 45)
    console.log(`${hour} ${min - 45}`);
else
{
    min = 60 + (min - 45) 
    if (hour - 1 == -1)
        console.log(`23 ${min}`)
    else
        console.log(`${hour - 1} ${min}`)
} //#2 알람 시계

let fs4 = require('fs');
let input4 = fs4.readFileSync('/dev/stdin').toString().split('\n');

let on = Number(input4[0].split(' ')[0]) * 60 + Number(input4[0].split(' ')[1]) + Number(input4[1]);

on = on % 1440;
console.log(parseInt(on / 60) (on % 60)); //#3 오븐 시계

let fs5 = require('fs');
let input5 = fs5.readFileSync('/dev/stdin').toString().split('\n');

let [a, b, c] = input[0].split(' ').map(Number);

if (a == b == c)
    console.log(10000 + a * 1000);
else if (a == b || c == a)
    console.log(1000 + a * 100);
else if (b == c)
    console.log(100 + b * 100);
else
    console.log(Math.max(a, b, c) * 100); // #4 주사위 눈