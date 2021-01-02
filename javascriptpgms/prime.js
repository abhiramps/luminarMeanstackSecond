var num=8;
var flag=0;
for(let i=2;i<num;i++)
{
    if(num%2==0)
    {
        flag++;
        break;
    }
    else{
        falg=0;
    }

}
if(flag==0)
{
    console.log("not prime");
}
else{
    console.log("prime");
}