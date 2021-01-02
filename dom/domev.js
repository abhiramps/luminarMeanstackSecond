var clk=document.querySelector("#clk")

// function change(){
//     clk.textContent="clicked";          //normal fn
//     clk.style.color="red"

// }

// clk.addEventListener("click",change)

//expecting 2 arguments
//1.event -"click"
//2.function - what happend when clicked

clk.addEventListener("click",()=>{      //arrow function //
    clk.textContent="clicked";
    clk.style.color="red"
})

//for double click
var dbclk=document.querySelector("#dbclk")
dbclk.addEventListener("dblclick",()=>{
    dbclk.textContent="doubleclicked";
    dbclk.style.color="blue"
})

//mouse over
var mvr=document.querySelector("#mvr")
mvr.addEventListener("mouseover",()=>{
    mvr.textContent="mouse possitio  over me";
    mvr.style.color="green"
})

//mouse out
var mvr=document.querySelector("#mvr")
mvr.addEventListener("mouseout",()=>{
    mvr.textContent="mouseover";
    mvr.style.color="black"
})




