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

let fs2 = require('fs');
let input2 = fs2.readFileSync('/dev/stdin').toString().split('\n');
let [n, k] = input2[0].split(' ').map(Number);
let arr = input2[1].split(' ').map(Number);
arr.sort((a, b) => Number(a) - Number(b));
console.log(arr[k - 1]); // k번째 수

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let N = Number(input[0]);

function sorted(a, b)
{
  let [a1, a2] = a.split(' ').map(Number);
  let [b1, b2] = b.split(' ').map(Number);

  let c1 = a1 - b1;
  if (c1 != 0)
      return c1;
  let c2 = a2 - b2;
  return c2;
}

let arr = [];
for (let i = 1; i <= N; i++)
{
  arr.push(input[i]);
}
arr.sort(sorted);
console.log(arr.join('\n')); //좌표 정렬하기



