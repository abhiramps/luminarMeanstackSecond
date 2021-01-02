//array swerching

var arr=[10,12,14,2,7,8];

var key=12;
var flag=0;

for(let i=0; i<=arr.length;i++)
{
    if(i==key)
    {
        flag=1;
        break;
    }
}
if(flag==0)
{
    console.log("not found")

}
else
{
    console.log("found")
}
