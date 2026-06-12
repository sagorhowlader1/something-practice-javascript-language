// spees method string 
// 1 trim
// 2 trimStart
// 3 trimEnd
// 4 toLowerCase
// 5 toUpperCase

// let name1 = "Sagor Howlader,"
// let name2 = 'Sujon Mondul,'
// let name3 = `Nonye Des`

// console.log(name1, name2, name3);

// let word = "Hello"
// word[0] = 'S'

// console.log(word[0]);

// let word = " Hello World ";

// console.log(word);
// let trimedWord = word.trim();
// let trimedWord = word.trimStart();
// let trimedWord = word.trimEnd();
// console.log(trimedWord);

// let gmail = "Sagorhowlader.edu@Gmail.com"

// let lowergmail = gmail.toLowerCase();
// let lowergmail = gmail.toUpperCase();

// console.log(lowergmail);

// let str = "I love full stack developer"

// console.log(str);

// let sliced = str.slice(2)
// console.log(sliced);

// console.log(str.includes("I"));
// console.log(str.indexOf("I"));


// let friends = "Rahim Shohel Karim Akash"

// console.log(friends);

// let splitFriends = friends.split(' ')
// console.log(splitFriends);

// let joinFriends = splitFriends.join(',')
// console.log(joinFriends);


// let num1 = "2";
// let num2 = 2;

// console.log(num1 + num2);


// let firstName = "Sagor"
// let lastName = "Howlader"

// let fullName = `${firstName} ${lastName}`

// console.log(fullName);

// let reverseName = fullName.split('').reverse().join('')

// console.log(reverseName);


// let userEmail = "Sagorhowlaer.edu@gmailcom"


// let userEmailLower = userEmail.toLowerCase();

// console.log(userEmailLower);

// if(userEmailLower.includes("@") && userEmailLower.includes(".")){
//     console.log("Valid Email");
// }else{
//     console.log("Invalid Email");
// }

// let cart = [];

// console.log(cart);

// cart.push("Phone")
// console.log(cart);

// cart.push("Keyboard")
// console.log(cart);

// cart.push("Speaker Box")
// console.log(cart);

// cart.pop();
// console.log(cart);


let mySentence = "I am Full Stack Development. In the learning point Development";

let word = mySentence.split(' ')
// console.log(word.length);

let chars = mySentence.split('')
// console.log(chars.length);

let count = 0;
for(let w of word){
    if(w == 'Development'){
        count++
    }
}

console.log(`Total word = ${word.length}, Total Characters = ${chars.length}, Development appears = ${count}`);