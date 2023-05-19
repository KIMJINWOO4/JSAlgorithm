let arr = [1, 2, 3] ;
let arr2 = new Array(1, 2, 3);
//같은 기능을 수행한다.
let arr3 = Array.from({length: 5}, () => 7);
//임의의 크기 5를 갖는 배열 생성하여 7로 초기화.
let arr4 = [[0,1,2,3], [4,5,6,7]]
// 2차원 배열 생성
let arr5 = Array.from(Array(4), ()=> new Array(5))
// [4][5]의 2차원 배열을 생성

let arr6 = new Array(3);
for (let i = 0; i < arr6.length; i++)
{
    arr6[i] = Array.from({length: 4}, (undefined, j) => i * 4 + j);
} //2차원 배열에 각각 0~11을 넣는 것.

let arr6 = arr6.concat([1, 2, 3]);
arr.push(3) //index 하나 증가하고 3으로 넣음.
//배열 내부 [1, 2, 3, undefined, undefined, undefined, 10, undefined, 8]
arr2 = [34, 5];
arr2 = arr.concat(arr2); // 서로 합친 결과 반환
arr2.slice(2, 4);
//index 2~(4-1)까지 가져온다. O(N)
arr2.indexOf(4); //4값을 가지는 첫째 인덱스 반환