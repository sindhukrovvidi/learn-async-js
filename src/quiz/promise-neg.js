const array2D = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, -9],
];

function checkForNegatives(arr) {
  return new Promise((resolve, reject) => {
    if (Array.isArray(arr)) {
      setTimeout(() => {
        const rowPromises = arr.map((row, index) => {
          return new Promise((resolve, reject) => {
            if (row.some((num) => num < 0)) {
              resolve(index);
            } else {
              reject("No row contains negative numbers");
            }
          });
        });

        Promise.any(rowPromises)
          .then((rowIndex) => {
            resolve(rowIndex);
          })
          .catch((error) => {
            reject(error);
          });
      }, 0);
    } else {
      reject("BAD INPUT: Expected array as input");
    }
  });
}

checkForNegatives(array2D)
  .then((rowIndex) => {
    console.log("Row index with negative number:", rowIndex);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
