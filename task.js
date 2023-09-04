// function oddNums(digits) {
//   let sum = 0;
//   for (let i = 0; i < myNums.length; i++) {
//     const index = i;
//     const element = digits[index];
//     sum = sum + element;
//     const total = sum;
//     console.log(total);
//   }
// }
// const myNums = [12, 13, 14, 23, 45, 56, 54];
// oddNums(myNums);



// function totalMarks(myMark) {
//   let summery = 0;
//   for (let i = 0; i < getNumbres.length; i++) {
//     const index = i;
//     const total = myMark[index];
//     summery = summery + total;
//     console.log(index, total, summery);
//   }
// }


// function getSumOdds(numbers) {
//   for (let i = 0; i < getNumbres.length; i++) {
//     const index = i;
//     const element = numbers[index];
//     if (element % 2 !== 0) {
//       console.log(element);
//     }

//   }
// }
// const getNumbres = [23, 24, 25, 26, 28];
// getSumOdds(getNumbres);


// function totalMark(myMark) {
//   let summery = 0;
//   for (let i = 0; i < nums.length; i++) {
//     const index = i;
//     const total = myMark[index];
//     summery = summery + total;

//     //console.log(index, total, summery);
//   }
// }

// function getSumOdds(numbers) {
//   for (let i = 0; i < getnumbers.length; i++) {
//     const index = i;
//     const element = numbers[index];
//     if (element % 2 !== 0) {
//       console.log(index, element);
//     }
//   }
// }
// const getnumbers = [98, 76, 67, 87, 59, 99, 78];
// getSumOdds(getnumbers);

function getOddNumbersArray(numbers) {
  const oddNumbers = [];
  for (let i = 0; i < numbers.length; i++) {
    const index = i;
    const element = numbers[index];
    if (element % 2 === 1) {
      console.log(index, element);
      oddNumbers.push(element);
    }
  }
  return oddNumbers;
}

const myNumbers = [99, 98, 97, 96, 85, 88, 68, 67, 55];
const oddNumbers = getOddNumbersArray(myNumbers);
console.log(oddNumbers);
const oddNumberSum = getOddNumbersArray(oddNumbers);
console.log('MY TOTAL', oddNumberSum)
