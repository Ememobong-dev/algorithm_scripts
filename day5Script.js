// Given a string s consisting of words and spaces, return the length of the last word in the string.

// A word is a maximal substring consisting of non-space characters only.

const lengthOfLastWord = (word) => {
    if(word.length >=1 ){
        let splittedWord = word.trim().split(" ");
        console.log(splittedWord);
        let lastWord = splittedWord[splittedWord.length - 1];
        return "The length of last word is " + lastWord.length;
    } else {
        return -1;
    }
};

console.log(lengthOfLastWord("Hello World"));
console.log(lengthOfLastWord("   fly me   to   the moon  "));
console.log(lengthOfLastWord("luffy is still joyboy"));
console.log(lengthOfLastWord(""));
