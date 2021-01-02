//rol,name,course,total
//initialize
//print

class student{
    constructor(roll,name,course,total){
        this.roll=roll;
        this.name=name;
        this.course=course;
        this.total=total;
    }

    print(){
        console.log("name="+this.name)
        console.log("roll="+this.roll)
        console.log("course="+this.course)
    }

}
var obj=new student(100,"akhi","mca",145)
//obj.print()
var obj1=new student(101,"abhi","bca",147)
var obj2=new student(102,"rono","mca",148)
var obj3=new student(103,"messi","bca",140)
var obj4=new student(104,"sachin","mca",145)

var students=[]
students.push(obj)
students.push(obj1)
students.push(obj2)
students.push(obj3)
students.push(obj4)


//print all student names
// students.forEach(obj=>console.log(obj.name))

//mca
//students.filter(obj=>obj.course=="mca").forEach(obj=>console.log(obj.name))

//highest total
// var total=students.map(obj=>obj.total).reduce((t1,t2)=>(t1>t2?t1:t2))
// console.log(total)

//sort students according to their total

var sor=students.sort((o1,o2)=>o1.total>o2.total?-1:1)
console.log(sor) 
// var total=students.map(obj=>obj.total)

