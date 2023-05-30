let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let arr = input[0].split(' ');
arr.sort((a, b) => Number(a) - Number(b));
console.log(`${arr[0]} ${arr[1]} ${arr[2]}`) //세수정렬

let fs2 = require('fs');
let input2 = fs2.readFileSync('/dev/stdin').toString().split('\n');
let n = parseInt(input2[0]);
let arr3 = [];
for(let i = 1; i <= n; i++)
  arr3.push(parseInt(input2[i]));
arr3.sort((a, b) => Number(b) - Number(a));
console.log(arr3.join('\n')); // 수 정렬하기 4

