var students=[
    [100,"ajay","cse",250],
    [101,"vjay","cse",350],
    [100,"sajay","mca",150],
    [100,"vinay","mca",200]
]


//print all students in upper case

for( let stud of students)
{
    console.log(stud[1].toUpperCase());

}

//no of stud in mca
var count=0;
for( let stud of students)
{
    if(stud[2]=="mca")
    {
    count++;
    }
}


//print details of stud who have highest total
