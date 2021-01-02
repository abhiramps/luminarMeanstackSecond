var tweets=[
    "sachin,tweet1",
    "sachin,tweet2",
    "kohli,tweet1",
    "kohli,tweet2",
    "kohli,tweet3",
    "sewag,tweet1"
]

var obj={}
for (let tweet of tweets){
    let name=tweet.split(",")[0];
   
   
    if(name in obj){
        obj[name]+=1
    }
    else{
        obj[name]=1
    }
}

//{ sachin: 2, kohli: 3, sewag: 1 }
var srt=[]
for(let k in obj){
    srt.push([obj[k],k])
}
srt.sort((one,two)=>two[0]-one[0])
console.log(srt[0])



