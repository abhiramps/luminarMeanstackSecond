var inp=123;

var a=0;
var cube1=""
while(inp>0)
{
    let num=inp%10;
    

    a=a+Math.pow(num,3);
    cube1 =cube1+String(a)
    num=Math.floor(num/10);
   
}
console.log(cube1);