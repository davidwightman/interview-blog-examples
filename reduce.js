const arr = [0, 1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

console.log(arr.reduce(reducer, 10));
