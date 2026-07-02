 let str = "Apple, Banana, Mango";
 // str.slice(8, 14);
 console.log(str.slice(7, 13));

// let str = "Apple, Banana, Mango";
// // str.slice(8, 14);
// console.log(str.slice(-12, -6));

let text = "Please visit facebook office";
let newText = text.replace("facebook","google");
console.log(newText);


let text1 = "google heardquarter";
let text2 = text1.toUpperCase();
console.log(text2);


let str1 = "FACEBOOK HEARDQUARTER";
let str2 = str1.toLocaleLowerCase();
console.log(str2);


let num1 = "Hello";
let num2 = "Would";
let num3 = num1.concat(" ", num2);
console.log(num3);


let numbers = "Sagor" + " " + "Howlader";
console.log(numbers);


// let texter = "5";
// texter.padStart(4, "0");
// console.log(texter);

let texter = "5";
texter.padEnd(4, "0");
console.log(texter);