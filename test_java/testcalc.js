 textbox=(num)=>{
    var txt=document.querySelector("#textbox");
    txt.value+=num;  

}
calculation=()=>{
    var txt=document.querySelector("#textbox");
    var res=eval(txt.value)
    txt.value=res;
}
clearbox=()=>{
  var txt= document.querySelector("#textbox");
    txt.value="";
}