const myFunction = (arrayOfNumbers, k) => {
  let operations = 0;

  while (true) {
    // Check if all elements are greater than or equal to k
    if (arrayOfNumbers.every((num) => num >= k)) {
      break;
    }

    // If there are less than 2 elements, we can't perform any more operations
    if (arrayOfNumbers.length < 2) {
      return -1;
    }

    // Find the two smallest elements
    const sortedArray = [...arrayOfNumbers].sort((a, b) => a - b);
    const x = sortedArray[0];
    const y = sortedArray[1];

    // Remove the two smallest elements
    const indexOfX = arrayOfNumbers.indexOf(x);
    arrayOfNumbers.splice(indexOfX, 1);
    const indexOfY = arrayOfNumbers.indexOf(y);
    arrayOfNumbers.splice(indexOfY, 1);

    // Insert the new element
    const newElement = Math.min(x, y) * 2 + Math.max(x, y);
    arrayOfNumbers.push(newElement);

    console.log("Arrayof numbers ", arrayOfNumbers);
   

    operations++;
   
  }
  console.log(
    "................................................................."
  );
  return "The minimum number of operations needed is "  + operations;
  
};

const nums = [2, 11, 10, 1, 3];
const numsTwo = [1, 1, 2, 4, 9];

console.log(myFunction(nums, 10));
console.log(myFunction(numsTwo, 20));
