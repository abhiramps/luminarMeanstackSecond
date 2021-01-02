var tweet=[
    "sachin,tweet1",
    "sachin,tweet2",
    "kohli,tweet1",
    "sehwag,tweet1",
    "kohli,tweet2",
    "kohli,tweet3"
]

//most no of tweets

// console.log(tweet[0])
 var obj={}
for(let t of tweet){
    let word=t.split(",")[0];
   // word=word[0]
    //obj[word[0]]=word[1]
   // console.log(word)
   if(word in obj){
       obj[word]+=1;

   }
   else{
       obj[word]=1;
   }
    
}
//console.log(obj)
//{ sachin: 2, kohli: 3, sehwag: 1 }

var srt=[]  //empty array

for(let k in obj){

   // console.log([obj[k],k])
    srt.push([obj[k],k])    //[ [ 2, 'sachin' ], [ 3, 'kohli' ], [ 1, 'sehwag' ] ]
}

srt.sort((one,two)=>two[0]-one[0])
 console.log(srt[0])
//console.log(srt)



