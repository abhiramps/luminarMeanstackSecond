var str="this is this is java";
var words=str.split(" ");

obj={}
for(word of words){
    if(word in obj){        //this  //is  //this
        obj[word]+=1
    }        
    else{
        obj[word]=1;
    }
}
console.log(obj)
