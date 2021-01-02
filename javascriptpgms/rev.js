var num=123;
var rev=""

while(num>0){

    let digt=num%10;
    rev=rev+String(digt);
    num=Math.floor(num/10);

}
console.log(rev);