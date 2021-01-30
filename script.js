

/*******************numbers************* */

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


/******************operators ************************** */
let addition=(document.querySelector(".addition").innerHTML);
let subtraction=(document.querySelector(".subtraction").innerHTML);
let multiplication=(document.querySelector(".multiplication").innerHTML);
let division=(document.querySelector(".division").innerHTML);

/*****************************display nubers******************************** */
document.querySelector(".one").addEventListener('click',function(){
    document.querySelector("#display").value+=one;    
})
document.querySelector(".two").addEventListener('click',function(){
    document.querySelector("#display").value+=two;

})
document.querySelector(".three").addEventListener('click',function(){
    document.querySelector("#display").value+=three;

})
document.querySelector(".four").addEventListener('click',function(){
    document.querySelector("#display").value+=four;

})
document.querySelector(".five").addEventListener('click',function(){
    document.querySelector("#display").value+=five;
})
document.querySelector(".six").addEventListener('click',function(){
    document.querySelector("#display").value+=six;
})
document.querySelector(".seven").addEventListener('click',function(){
    document.querySelector("#display").value+=seven;
})
document.querySelector(".eight").addEventListener('click',function(){
    document.querySelector("#display").value+=eight;
})
document.querySelector(".nine").addEventListener('click',function(){
    document.querySelector("#display").value+=nine;
})
document.querySelector(".zero").addEventListener('click',function(){
    document.querySelector("#display").value+=zero;
})

/**************************display operators*************************** */
document.querySelector(".addition").addEventListener('click',function(){
    document.querySelector("#display").value+=addition;

})
document.querySelector(".subtraction").addEventListener('click',function(){
    document.querySelector("#display").value+=subtraction;
   
})
document.querySelector(".multiplication").addEventListener('click',function(){
    document.querySelector("#display").value+=multiplication;
})
document.querySelector(".division").addEventListener('click',function(){
    document.querySelector("#display").value+=division;
})

/******************** all clear button************************ */
document.querySelector(".all-clear").addEventListener('click',function(){
    document.querySelector("#display").value="";
})

/******************** delete button************************ */
document.querySelector(".del").addEventListener('click',function(){
    let displayString =document.querySelector("#display").value;
    let smallString = displayString.slice(0,(displayString.length-1));
    // console.log(smallString);
    document.querySelector("#display").value=smallString;
    
})

/***********************decimal display***************************** */

document.querySelector(".decimal").addEventListener('click',function(){

    document.querySelector("#display").value+=".";
})


/************************equal  *******************************************/

document.querySelector(".equals").addEventListener('click',function(){
    let equation=document.querySelector("#display").value;
    
    
    
    try {
        let result =eval(equation);
        document.querySelector("#display").value=result;
      }
      catch(err) {
        document.querySelector("#display").value="Syntax Error";
        
      }

})



