var text="this is this is java";

//word count
//this:2 is :2 java:1

//step1 split the string


var words=text.split(" ");


//[this , is ,this ,is ,java]

obj={}//empty obj
//key | value
//this  1
//is    1
//this 

for(let word of words){
    if(word in obj){
        obj[word]+=1                //is there "this " exist in obj
    }

    else{
        obj[word]=1 //is :1
    }
}
console.log(obj)