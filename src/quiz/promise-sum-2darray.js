const array2D = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

function sum1DArray(arr) {
  return new Promise((resolve, reject) => {
    if (Array.isArray(arr)) {
      setTimeout(() => {
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
          sum += arr[i];
        }
        resolve(sum);
      }, 0);
    } else {
      reject("BAD INPUT: Expected array as input");
    }
    console.log("returning from sum");
  });
}

Promise.all(array2D.map((i) => sum1DArray(i))).then((sumArray) => {
  let sum = 0;
  for (let i = 0; i < sumArray.length; i++) sum += sumArray[i];

  console.log("sum: ", sum);
});
