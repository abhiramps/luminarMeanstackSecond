function display(num){
    var txt=document.querySelector("#display")
    txt.value+=num
}

function solve(){
    var txt=document.querySelector("#display")
    let res=eval(txt.value)
    txt.value=res
}

let clarbox=()=>{
    document.querySelector("#display").value=""
}