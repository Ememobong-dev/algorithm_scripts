// Given a string s consisting of words and spaces, return the length of the last word in the string.

// A word is a maximal
// substring
//  consisting of non-space characters only.

const lengthOfLastWord = (word) => {

    if(word.length >=1 ){
        let splittedWord = word.trim().split(" ");
        console.log(splittedWord);
        let lastWord = splittedWord[splittedWord.length - 1];
        return lastWord.length;
    } else {
        return;
    }

};

console.log(lengthOfLastWord(""));
