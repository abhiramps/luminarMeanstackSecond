var str = "ABABBC";



// var splt=str.splice("");
// console.log(splt)
//  var obj={};
//  var i=0;
// for(let char of str){

//     //a:1

//     obj[char]=+i;
//     i=i+1;


// }
// console.log(obj)


// obj = {};
// for (let word of str) {
//     if (word in obj) {

//         console.log("first recursive character is" + word);
//         break;
//     }
//     else {
//         obj[word] = 1;
//     }
// }

obj = {}
for (char of str) {
    if (char in obj) {
        console.log("first recursive character is "+char);
        break;
    }
    else {

        obj[char] = 1
    }
}



