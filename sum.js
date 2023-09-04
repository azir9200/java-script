// function multiNumber(number) {
//   let result = 1;
//   for (let i = 0; i <= 7; i++) {
//     result = result * 1;

//   }
//   return result;
// }
// const result = multiNumber(7);
// console.log(result);


function suNumbers(numbers) {
  let sum = 0;
  for (let i = 0; i <= numbers; i++) {
    sum = sum + i;
    console.log(i, sum);
  }
  return sum;
} const result = suNumbers(7);
console.log(result);