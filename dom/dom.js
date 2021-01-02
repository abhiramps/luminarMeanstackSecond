// // var ur=document.URL
// // alert(ur)

// var tg=document.getElementsByTagName("h1")
// for(tag of tg){
//     tag.style.color="green"
// }

// var lis=document.getElementsByTagName("li")
// for(list of lis){
//     list.style.color="red"
// }
 

// var h1=document.getElementById("one")//for selecting perticular element
// h1.style.color="blue"

// var clss=document.getElementsByClassName("cls")
// for(cl of clss){
//     cl.style.color="cyan"
// }

var id=document.querySelector("#one")
id.style.color="red"

var cls=document.querySelectorAll(".cls")
cls.forEach(cl=>cl.style.color="cyan")

var tg=document.querySelectorAll("li")
tg.forEach(t=>t.style.color="blue")
 
var dom=document.querySelector("#dom")
dom.textContent="DocumentObjectMenthods" //for changing text content

// var id=document.querySelector("#one") //for alerting text content
// alert(id.textContent)

var dom=document.querySelector("#dom")
dom.innerHTML="<em>DocumentObjectMenthods</em>"//for changing style of text content