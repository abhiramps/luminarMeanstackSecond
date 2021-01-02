//=>map()

// var arr=[10,11,8,9,5,2]

//squ

// var squ=arr.map(num=>num**2)
// console.log(squ)

//cube

// var cube=arr.map(num=>num**3)
// console.log(cube)

//=>filter()
//find even nos from this array

// var evens=arr.filter(num=>num%2==0)
// console.log(evens)


// var names=["sachin","sehwag","dravid","yuvi","kohli"]
// //print inupper case

// // var name=names.map(na=>na.toUpperCase())
// // console.log(name);

// //print names staring with s

// var name=names.filter(na=>na[0]=='s')
// console.log(name)

//internal iteration

var arr=[10,11,12,13]
// arr.forEach(num=> console.log(num))


//=>reduce()
//find max element from this array

// var res=arr.reduce((no1,no2)=>no1>no2?no1:no2)   //ternary operator
// console.log(res)

// //min
// var min=arr.reduce((no1,no2)=>no1<no2?no1:no2)   
// console.log(min)

//=>sum
// var sum=arr.reduce((no1,no2)=>no1+no2)   
// console.log(sum)


//sort()
var srt=arr.sort((no1,no2)=>no2-no1)
console.log(srt)




    
