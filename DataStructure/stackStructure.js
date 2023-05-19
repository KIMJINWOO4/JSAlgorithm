let stack = [];

stack.push(1); //[1];
stack.push(2); //[1, 2];
stack.push(3); //[1, 2, 3];
stack.pop(); //[1, 2];
stack.push(4); //[1, 2, 4];

let lifo = stack.reverse(); //Last In First Out 을 위한 배열 뒤집기.
console.log(lifo);