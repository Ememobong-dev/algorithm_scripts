

// 1. The function takes in a string. e.g Emem
// 2. Split the string into an array of strings
// 3. use the reverse method in javascript array to reverse the order of the string
// 4. turn the reversed array back to a string and return


function stringReversal (str) {
    let newArr = str.split("");
    newArr.reverse();

    return newArr.join('-');
    
}
  
 console.log(stringReversal("EMEM")) ;

