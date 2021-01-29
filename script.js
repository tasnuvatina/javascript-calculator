let one=parseInt(document.querySelector(".one").innerHTML);
let two=parseInt(document.querySelector(".two").innerHTML);
let three=parseInt(document.querySelector(".three").innerHTML);
let four=parseInt(document.querySelector(".four").innerHTML);
let five=parseInt(document.querySelector(".five").innerHTML);
let six=parseInt(document.querySelector(".six").innerHTML);
let seven=parseInt(document.querySelector(".seven").innerHTML);
let eight=parseInt(document.querySelector(".eight").innerHTML);
let nine=parseInt(document.querySelector(".nine").innerHTML);
let zero=parseInt(document.querySelector(".zero").innerHTML);

let addition=(document.querySelector(".addition").innerHTML);
let subtraction=(document.querySelector(".subtraction").innerHTML);
let multiplication=(document.querySelector(".multiplication").innerHTML);
let division=(document.querySelector(".division").innerHTML);


document.querySelector(".one").addEventListener('click',function(){
    document.querySelector("#display").innerHTML+=one;
})
document.querySelector(".two").addEventListener('click',function(){
    document.querySelector("#display").innerHTML+=two;
})
document.querySelector(".three").addEventListener('click',function(){
    document.querySelector("#display").innerHTML+=three;
})
document.querySelector(".four").addEventListener('click',function(){
    document.querySelector("#display").innerHTML+=four;
})
document.querySelector(".five").addEventListener('click',function(){
    document.querySelector("#display").innerHTML+=five;
})
document.querySelector(".six").addEventListener('click',function(){
    document.querySelector("#display").innerHTML+=six;
})
document.querySelector(".seven").addEventListener('click',function(){
    document.querySelector("#display").innerHTML+=seven;
})
document.querySelector(".eight").addEventListener('click',function(){
    document.querySelector("#display").innerHTML+=eight;
})
document.querySelector(".nine").addEventListener('click',function(){
    document.querySelector("#display").innerHTML+=nine;
})
document.querySelector(".zero").addEventListener('click',function(){
    document.querySelector("#display").innerHTML+=zero;
})


document.querySelector(".addition").addEventListener('click',function(){
    document.querySelector("#display").innerHTML+=addition;
})
document.querySelector(".subtraction").addEventListener('click',function(){
    document.querySelector("#display").innerHTML+=subtraction;
})
document.querySelector(".multiplication").addEventListener('click',function(){
    document.querySelector("#display").innerHTML+=multiplication;
})
document.querySelector(".division").addEventListener('click',function(){
    document.querySelector("#display").innerHTML+=division;
})