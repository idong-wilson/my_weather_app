let MixString = ['77565', '5b9b7', '76099a', 'ff542', '131d7', '68431f6'];
let secretOne = "76";
let secretTwo = "5e7b2";
let secret = secretTwo.split("").reverse().join("");

let combinedString = MixString.join("");


let reversedCombinedString = combinedString.split("").reverse().join("");

let stepTwo = reversedCombinedString.split(secretOne); 

let stepThree = stepTwo.join("");

let key = stepThree.replace(secret, ""); 

let keyArray = key.split("");
keyArray.splice(-11, 1); 
key = keyArray.join("");