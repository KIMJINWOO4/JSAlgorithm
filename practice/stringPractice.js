let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);
let sum = 0;

for (let i = 0; i < n; i++)
    sum += Number(input[1][i]);
console.log(sum); //#1 문자 더하기

let fs2 = require('fs');
let input2 = fs2.readFileSync('/dev/stdin').toString().split('\n');

let n2 = Number(input2[0]);

for(let i = 1; i <= n2; i++)
{
    let [r, s] = input[i].split(' ');
    let result = '';
    for (let j = 0; j <= s.length; j++)
    {
        result += s.charAt(j).repeat(r);
    }
    console.log(result);
} //#2 문자열 반복

let fs3 = require('fs');
let input3 = fs3.readFileSync('/dev/stdin').toString().split('\n');

let a = input3[0].split(' ')[0];
let b = input3[0].split(' ')[1];

let newa = a[2] + a[1] + a[0];
let newb = b[2] + b[1] + b[0];
console.log(Math.max(Number(newa), Number(newb))); //#3 상수

let fs4 = require('fs');
let input4 = fs4.readFileSync('/dev/stdin').toString().split('\n');

let wordCount = Number(input4[0]);
let flag = wordCount;
for (let i = 1; i <= wordCount; i++)
{
    let mySet1 = new Set(input4[i][0]);
    for (let j = 0; j < input4[i].length - 1; j++)
    {
        if (input4[i][j] != input4[i][j + 1])
        {
            if (mySet1.has(input4[i][j]))
            {
                flag -= 1;
                break;
            }
        }
        else
            mySet1.add(input4[i][j + 1]);
    }
}
console.log(flag); //#4 그룹 단어 체커

let fs5 = require('fs');
let input5 = fs5.readFileSync('/dev/stdin').toString().split('\n');

let arr5 = input5[0].trim().split(' ');
if (arr5 == '')
    console.log(0);
else
    console.log(arr5.length); //#5 단어의 개수