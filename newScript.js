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
  let baseName;
  let domainName;

  let splittedArray = word.split("://");

  if (splittedArray[0].includes("http")) {
    splittedArray.splice(0, 1);
  }

  let otherKindOfLink = splittedArray[0].split(".").slice(-2);

  baseName = otherKindOfLink[0]

  if (otherKindOfLink[1].includes("/")) {
    let xyy = otherKindOfLink[1].split("/");
    xyy.splice(1);
    domainName = xyy.join('')
  } else {
    domainName = otherKindOfLink[1];
  }

  return ` ${baseName}.${domainName}  `

 
};

console.log(extractWord("https://teamsdoc.io/app"));
console.log(extractWord("https://google.com/jjjjjj")); //google.com
console.log(
  extractWord(
    "https://www.frontendmentor.io/challenges/character-counter-znSgeWs_i6"
  )
); // frontendmentor.io
console.log(
  extractWord("https://www.wix.com/explore/websites/site/malco-wallshop")
);
console.log(extractWord("www.teamdocs.io/hello-there"));
console.log(extractWord("teamdocs.io"));
console.log(extractWord("https://www.teamdocs.io"));
console.log(extractWord("https://api.www.teamdocs.io/abc"));
