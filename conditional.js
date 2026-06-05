let age = 10;
if(age > 18){
    console.log("Under Age");
}else{
    console.log("Adult");
}

let temperature = 12;

if(temperature > 30){
    console.log("Too How! Please turn on AC");
}else{
    console.log("No Needed");
}

// const score = 55;

// if(score >= 80){
//     console.log("A+");
// }else if(score >= 70){
//     console.log("A");
// }else if(score >= 60){
//     console.log("A-");
// }else{
//     console.log("Fail");
// }

const score = 79;

if(score >= 80){
    console.log("A+");
}else if(score >= 70){
    console.log("A");
}else if(score >= 60){
    console.log("A-");
}else if(score >= 50){
    console.log("B")
}else if(score >= 40){
    console.log("C");
}else if(score >= 33){
    console.log("D");
}else if(score >= 0){
    console.log("F");
}

let isLoggedIn = true;
let balance = 1000;
let withdraw = 800;

if(isLoggedIn == true){
    if(withdraw <= balance){
        console.log('You can cash out your mony');
    }else{
        console.log("Not enough money");
    }
}else{
    console.log("You are not login");
}