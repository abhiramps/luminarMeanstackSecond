var arr=[10,11,12,13,14,15,5]
//map
//filter
//reduce
//sort


//squares
//  var array= arr.map(num=>num**2)
// array.forEach(element=> console.log(element))

// arr.map(num=>num**2).forEach(element => {console.log(element)});

//find the lowest number

// var lowest=arr.reduce((num1,num2)=>(num1>num2?num1:num2))
// console.log(lowest)

var array=["abhi","akhil","vishnu","ram","vysakh","soman"];
//print all names atarting with 'a'
//var name=array.filter(num=>num[0]=="a").forEach(ele=>console.log(ele))
// var name=array.filter(num=>num[0]=="a")
// console.log(name)

//print all names whose length is more than 5
//var name=array.filter(num=>num.length>=6).forEach(num=>console.log(num))

//print all names in ascending order


var ascending={a:"a",r:"r",v:"v",s:"s"}
// console.log(ascending.r)
var asc=array.map(num1=>num1[0]).forEach(num1=>
     {
        //var srt=ascending.sort((no1,no2)=>no2-no1).forEach(no1=>console.log(no1))
         if (num1==ascending["s"])
         { console.log(ascending.s)
            }
        
        
    });
