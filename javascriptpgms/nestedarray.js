var employees=[
    [100,"ajay","developer",25000],
    [101,"vjay","qa",35000],
    [100,"sajay","qa",15000],
    [100,"vinay","developer",20000]
]

for(emp of employees)
{
    console.log(emp);
}

//emp name only
for(emp of employees)
{
    console.log(emp[1]);
}

//total salary

var total=0;
for(emp of employees)
{
    total=total+emp[3];
   
    
}
console.log(total);
