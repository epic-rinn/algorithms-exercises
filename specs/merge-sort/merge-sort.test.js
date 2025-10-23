/*
  Write a function that performs mergesort
  Name the function mergeSort
  It will take in a array of numbers and return a sorted array numbers

  You'll need to write more than just one function
*/

const merge = (arr1, arr2) => {
  const mergedArr = [];

  while (arr1.length && arr2.length) {
    mergedArr.push(arr1[0] > arr2[0] ? arr2.shift() : arr1.shift());
  }

  return mergedArr.concat(arr1, arr2);
};

const mergeSort = (nums) => {
  // Merge Sort Implementation
  if (nums.length == 1) return nums;
  const midPoint = nums.length / 2;

  return merge(
    mergeSort(nums.slice(0, midPoint)),
    mergeSort(nums.slice(midPoint))
  );
};

// unit tests
// do not modify the below code
test("merge sort", function () {
  const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
  const ans = mergeSort(nums);
  expect(ans).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
