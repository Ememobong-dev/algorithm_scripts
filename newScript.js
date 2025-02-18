// const extractWord = (word) => {
//   let splittedArray = word.split("/");
// //   console.log(splittedArray, "Splitted");
//   let baseUrlArray;
//   let otherKindOfLink = splittedArray[0].split(".").slice(-2);

//   if (splittedArray.length > 1) {

//     if (splittedArray[0].includes("http")) {
//       const trial = splittedArray[2];
//       const splittedTrial = trial.split(".");
//       if (splittedTrial.length > 2) {
//         baseUrlArray = splittedTrial.slice(-2);
//         return baseUrlArray.join(".");
//       }
//       return splittedTrial.join(".");
//     } else {
//       // https weren't included in the link
//       return otherKindOfLink.join(".");
//     }
//   } else {
//     // https weren't included in the link
//     return otherKindOfLink.join(".");
//   }
// };

const extractWord = (word) => {
    let splittedArray = word.split("://");
    // console.log(splittedArray, "Splitted");
    if (splittedArray[0].includes("http")) {
        splittedArray.splice(0,1);
    }
    console.log(splittedArray, "Spliced");
    let otherKindOfLink = splittedArray[0].split(".");
    // console.log(otherKindOfLink, "hiiii");

    console.log(otherKindOfLink[-1].includes("/"))

    // if(otherKindOfLink[-1].includes("/")){
    //     otherKindOfLink[-1].split("/").splice(1, 1)
    //     console.log(otherKindOfLink, "HOSTNAME");
    // }


    // let baseUrlArray;
    // let otherKindOfLink = splittedArray[0].split(".");
    // console.log(otherKindOfLink, "splitted");
  
    // if (splittedArray.length > 1) {
  
    //   if (splittedArray[0].includes("http")) {
    //     const trial = splittedArray[2];
    //     const splittedTrial = trial.split(".");
    //     if (splittedTrial.length > 2) {
    //       baseUrlArray = splittedTrial.slice(-2);
    //       return baseUrlArray.join(".");
    //     }
    //     return splittedTrial.join(".");
    //   } else {
    //     // https weren't included in the link
    //     return otherKindOfLink.join(".");
    //   }
    // } else {
    //   // https weren't included in the link
    //   return otherKindOfLink.join(".");
    // }
  };


console.log(extractWord("https://teamsdoc.io/app"));
console.log(extractWord("https://google.com/jjjjjj")); //google.com
console.log(extractWord("https://www.frontendmentor.io/challenges/character-counter-znSgeWs_i6")); // frontendmentor.io
console.log(extractWord("https://www.wix.com/explore/websites/site/malco-wallshop"))
console.log(extractWord("www.teamdocs.io/hello-there"));
console.log(extractWord('teamdocs.io'));
console.log(extractWord("https://www.teamdocs.io"))
console.log(extractWord("https://api.www.teamdocs.io/abc"))

