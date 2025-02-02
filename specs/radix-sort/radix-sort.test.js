/*

  Implement a radix sort in a function called radixSort.

  You'll probably need several functions
  
  You can implement it using a binary or decimal based bucketing but I'd recommend the decimal based buckets because
  it ends up being a lot more simple to implement.

*/

function getMaxDigits(arr) {
  let maxDigit = 0;
  for (let i = 0; i < arr.length; i++) {
    maxDigit = Math.max(String(arr[i]).length, maxDigit);
  }

  return maxDigit;
}

function getDigitAt(num, index, maxDigit) {
  return Number(String(num).padStart(maxDigit, "0").charAt(index));
}

function radixSort(array) {
  // Radix sort implementation
  const maxDigits = getMaxDigits(array);
  let sortedArr = [];
  for (let i = maxDigits - 1; i >= 0; i--) {
    const buckets = Array.from({ length: 10 }).map(() => []);

    while (array.length) {
      const num = array.shift();
      const bucketNum = getDigitAt(num, i, maxDigits);
      buckets[bucketNum].push(num);
    }

    for (let j = 0; j < 10; j++) {
      while (buckets[j].length) {
        array.push(buckets[j].shift());
      }
    }
  }
  return array;
}

// unit tests
// do not modify the below code
describe("radix sort", function () {
  it("should sort correctly", () => {
    const nums = [
      20, 51, 3, 801, 415, 62, 4, 17, 19, 11, 1, 100, 1244, 104, 944, 854, 34,
      3000, 3001, 1200, 633,
    ];
    const ans = radixSort(nums);
    expect(ans).toEqual([
      1, 3, 4, 11, 17, 19, 20, 34, 51, 62, 100, 104, 415, 633, 801, 854, 944,
      1200, 1244, 3000, 3001,
    ]);
  });
  it("should sort 99 random numbers correctly", () => {
    const fill = 99;
    const nums = new Array(fill)
      .fill()
      .map(() => Math.floor(Math.random() * 500000));
    const ans = radixSort(nums);
    expect(ans).toEqual(nums.sort());
  });
});
