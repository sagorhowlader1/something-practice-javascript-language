// And (&&)
// Or (||)
// Not !

let isStudent = false;
let membershipCard = true;

if(isStudent == true && membershipCard == true){
    console.log("You have got 50% discount");
}else if(isStudent == true || membershipCard == true){
    console.log("You have got 25% discount");
}else{
    console.log("Sorry! You are no a discount");
}

let notTesting = true;
console.log(! notTesting);