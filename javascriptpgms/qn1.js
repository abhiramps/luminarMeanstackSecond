var employees=[
    [100,"ajay","developer",1981,1989],
    [101,"vjay","qa",1980,2002],
    [102,"sajay","qa",1991,2010],
    [103,"vinay","developer",1985,1989]
]
//print all emp name in upper

/*for( let emp of employees)
{
    console.log(emp[1].toUpperCase());

}

//emp details who ar dev

for( let emp of employees)
{ 
    if (emp[2]=="developer"){
        console.log(emp);

    }
    

}

//emp details who are work in1980s

for( let emp of employees)
{ 
    if (emp[3]>=1980 && emp[3]<=1989){
        console.log(emp);

    }
    

}*/


//emp details whose exp greater than 9 yrs
for( let emp of employees)
{ 
    let diff=emp[4]-emp[3];
    if (diff>=9){
        console.log(emp);

    }
    

}

