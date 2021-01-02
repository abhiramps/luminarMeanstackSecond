var pattern ="ABABBC";

//find first recursive character

//var first=pattern.split("")

obj={}
for(let char of pattern){
    if(char in obj){
        console.log("first rec char"+char)
        break;
    }
    else{
        obj[char]=1;
    }
}