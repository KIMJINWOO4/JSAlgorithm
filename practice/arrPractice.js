let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);
let arr = input[1].split(' ').map(Number);

let min = arr.reduce((a,b) => Math.min(a, b));
let max = arr.reduce((a,b)=>Math.max(a, b));

console.log(min, max); //#1 최소 최대

let fs2 = require('fs');
let input2 = fs2.readFileSync('/dev/stdin').toString().split('\n');

let data = input2.map(Number);
let max2 = Math.max(...data);

console.log(max2);
console.log(data.indexOf(max2) + 1); // #2 최댓값

let fs3 = require('fs');
let input3 = fs3.readFileSync('/dev/stdin').toString().split('\n');

let data3 = input3.map(Number);
let mySet = new Set();

for (let i = 0; i < 10; i++)
{
    mySet.add(data3[i] % 42);
}
console.log(mySet.size); //#3 나머지

let fs4 = require('fs');
let input4 = fs4.readFileSync('/dev/stdin').toString().split('\n');

let n4 = Number(input4[0]);

for(let i = 1; i <= n4; i++)
{
    let avg = 0;
    let data = input4[i].split(' ').map(Number);
    for (let j = 1; j <= data[0]; j++)
    {
        avg += data[j];
    }
    let avg2 = avg / data[0];
    let cnt = 0;
    for (let k = 1; k <= data[0]; k++){
        if(data[k] > avg2)
            cnt++;
    }
    console.log(`${(cnt / data[0] * 100).toFixed(3)}%`);
} //#4 평균은 넘겠지

let fs5 = require('fs');
let input5 = fs5.readFileSync('/dev/stdin').toString().split('\n');

let n5 = Number(input5[0]);
let arr2 = input5[1].split(' ').map(Number);
let max3 = arr2.reduce((a, b) => Math.max(a, b));
let sum = 0;
for (let i = 0; i< n5; i++)
{
    sum += (arr2[i]/max2 * 100);
}
console.log(`${(sum / n5)}`) //#5 평균

