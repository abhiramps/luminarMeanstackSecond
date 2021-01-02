//20000,18000,22000,19000,25000,32000,20000,19000,25000,24000,26000,21000


//expense in march
var exp=[20000,18000,22000,19000,25000,32000,20000,19000,25000,24000,26000,21000];
console.log(exp[2]);


//exp in jan and feb
var total=0;
total=exp[0]+exp[1];
console.log(total);

//searching of arrays ar defficult

//key value
//object

var exp={jan:20000,feb:18000,mar:22000,apr:19000,may:25000,june:32000,july:20000,aug:19000,
    sep:25000,oct:24000,nov:26000,dec:21000};

//values are accessed byusing corresponding key
console.log(exp["feb"]);
console.log(exp.jan)


//duplicate keys are not allowed
//duplicate values are allowed

var stud={
    roll:100,
    name:"ajay",
    course:"bca",
    total:150
}

console.log("course" in stud)
console.log("gender" in stud)


//adding a student value pair

stud["gender"]="male";
console.log(stud);
//adding 50 more to total
stud["total"]="";



//
var employee={
    eid:100,
    name:"john",
    desig:"dev",
    salary:2500
}

//print emp name only

console.log(employee["name"])

//adding key val pair

employee["gender"]="male"

//add 5000 rs to salary

employee["salary"]+=5000;
employee.salary+=5000;

//




