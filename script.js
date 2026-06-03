console.log(document.title);


document.getElementById("mainTitle").innerText = "Hello, I am Sagor Howlader."

// document.getElementsByClassName("paragraphText");
// console.log(document.getElementsByClassName("paragraphText"));
// document.getElementsByClassName("paragraphText")[1].innerText = 'js'

// const x = document.querySelector("h1")

// const x = document.querySelector('p');
// const x = document.querySelector('.paragraphText2');
const x = document.querySelectorAll('.paragraphText');
console.log(x);


// alert('Welcome')

// const btn = document.getElementById('btn')
// btn.addEventListener('click', ()=>{
//     alert("Welcome to Project")
// })

// const btn = document.getElementById('btn')
// btn.addEventListener('click', ()=>{
//     prompt("You are understand JavaScript Code?")
// })

const btn = document.getElementById('btn')
btn.addEventListener('click', ()=>{
    let myPrompt = prompt("You are understand JavaScript Code?")
    alert(myPrompt)
})

// const hereMe = ()=>{
//     document.body.style.backgroundColor ='yellow'
// }

const hereMe = ()=>{
    document.body.style.backgroundColor ='green'
    alert('Your color has been changed!!!!')
}