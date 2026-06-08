// continue
for(let i = 1; i < 100; i++){
    if(i==6){
        continue;
    }
    console.log(i);
}

// break
// for(let i = 1; i < 100; i++){
//     if(i==50){
//         break;
//     }
//     console.log(i);
// }

// continue using
// for(i = 1; i <= 100; i++){
//     if(i % 2 == 0){
//         continue;
//     }else{
//         console.log("Odd number -", i);
//     }
// }

for(i = 1; i <= 100; i++){
    if(i % 2 == 0){
        console.log("Even number -", i);
        break;
     }else{
        console.log("Odd number -", i);
    }
}