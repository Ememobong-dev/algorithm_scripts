
 let currentIndex;
 
 
 function clearDigits (str) {
    let i = 0;
    const textSplittedArray = str.split('');

    for (i; i < str.length; i++) {
        if(!isNaN(str[i])){
            const numberIndex = textSplittedArray.indexOf(str[i])
            textSplittedArray.splice(numberIndex, 1)
            textSplittedArray.splice(numberIndex-1, 1)
        }
    }
    return textSplittedArray.join('');
 }

 console.log(clearDigits("c4bb6"));
