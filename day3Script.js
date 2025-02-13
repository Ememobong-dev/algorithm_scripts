// LEETCODE 3066. Minimum Operations to Exceed Threshold Value II
// Medium

// You are given a 0-indexed integer array nums, and an integer k.
// In one operation, you will:
// Take the two smallest integers x and y in nums.
// Remove x and y from nums.
// Add min(x, y) * 2 + max(x, y) anywhere in the array.
// Note that you can only apply the described operation if nums contains at least two elements.

// Return the minimum number of operations needed so that all elements of the array are greater than or equal to k.

const myFunction = (arrayOfNumbers, k) => {
  for (let i = 0; i <= arrayOfNumbers.length; i++) {
    console.log("Array of numbers at begining", arrayOfNumbers);
    if (i < k) {
      let copyArray = [...arrayOfNumbers];

      const twoSmallestInt = copyArray.toSorted((a, b) => a - b).slice(0, 2);

      const indexOfMinValue = copyArray.findIndex(
        (item) => item === twoSmallestInt[0]
      );
      const indexOfMaxValue = copyArray.findIndex(
        (item) => item === twoSmallestInt[1]
      );

      let accumValue = twoSmallestInt[0] * 2 + twoSmallestInt[1];
      console.log("Iteration", i);
      console.log(twoSmallestInt, indexOfMinValue, indexOfMaxValue, accumValue);

      copyArray.splice(indexOfMinValue, 1);
      copyArray.splice(indexOfMaxValue, 1, accumValue);
      console.log("copy array", copyArray);

      arrayOfNumbers = [...copyArray];
      console.log("Array of numbers", arrayOfNumbers);
      console.log(
        "................................................................."
      );
    } 
  }

  return arrayOfNumbers;
};

const nums = [2, 11, 10, 1, 3];
const numsTwo = [1, 1, 2, 4, 9];

console.log(myFunction(nums, 10));
