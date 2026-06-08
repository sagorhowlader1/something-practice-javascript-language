console.log("Sagor Howlader");

console.log(37*1998);


let myName = "Sagor";
myName = "Prime Misiter"
console.log(myName);

let myAge = 25;
console.log(myAge);

// String, Number/Integer, Boolean

// String
let name = "Sagor Howlader"
let age = 25;
let myHappy = true;
// console.log(name);
// console.log(age);
console.log(String(name) + age + Boolean(myHappy));

// Number/Interger
let score = 200;
let scores = 400;
console.log(score + scores);

// Boolean
let  areYousick = false;
let areYouHappy = true;
console.log(areYouHappy);

const pi = 4.5255;
const yourBirthday = 2000;

// pi = 4.5555;
// console.log(pi);

var cityName = "Dhaka"
cityName = 'Barishal'
console.log(cityName);

// function code start here
function fristName(a,b){
    // console.log(a+b)
    // console.log(a-b)
    // console.log(a*b)
    // console.log(a%b)
    console.log(a/b)
}

// fristName(5,15)

const sub = (a,b)=>{
    console.log(a+b)
}

sub(10,5)


// practice code start here

// practice 1

// let number = 99;
// if(number % 2 == 0){
//     console.log("Even");
// }else{
//     console.log("Odd");
// }

// practice 2
let firstNum = 1;
let secondNum = 4;
let thirdNum = 2;

if(firstNum > secondNum && firstNum > thirdNum){
    console.log("Fist number is the largst");
}else if(secondNum > firstNum && secondNum > thirdNum){
    console.log("Second number is the largst");
}else{
    console.log("Third number is the largst");
}

// practice 3
let lightColor = 'green'

if(lightColor == "red"){
    console.log("Stop");
}else if(lightColor == "yellow"){
    console.log("Be ready");
}else if(lightColor == "green"){
    console.log("Please Go")
}else{
    console.log("Not working")
}

// practice 4
let password = 'sag414';

if(password.length < 6){
    console.log("Your passwourd is less than 6!");
}else{
    console.log("Registration Successful");
}

// practice 5
for(let i = 2; i <=20; i++){
    console.log("Table of ---", i);

    for(let j = 1; j <=20; j++){
        let x = i * j
        console.log(i, " x ", j, "=", x);
    }
}


// practice 6
let sum = 0;

for(let i = 1; i <=3; i++){
    sum = sum + i
}

console.log(sum);


let = 0;

for(let i = 1; i <=5; i++){
    sum = sum + i
}

console.log(sum);