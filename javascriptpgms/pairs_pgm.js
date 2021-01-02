var arr=[1,2,3,4,5,6];

//1 2 3 4 5 6
//0 1 2 3 4 5 

//l          u

//6(2,4),(1,5)
//element=6

//arr[l]+arr[u]=



var low=0;
var upp=arr.length-1;
var element=6;

while(low<upp){
    let total=arr[low]+arr[upp];
    if(total>element)
    {
        upp=upp-1;
    }
    else if (total<element){
        low =low+1;
    }
    else if(total==element)
    {
        console.log("pairs"+arr[low]+","+arr[upp]);
        low=low+1;
    }
}

