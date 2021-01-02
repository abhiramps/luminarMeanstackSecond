//object orented programming

//class
//object
//reference

class persion{

    constructor(name,age,gender){
        this.name=name;
        this.age=age;
        this.gender=gender;
    }
    printPersion(){
       console.log(this.name+this.age+this.gender)
    }
}
//  var obj=new persion()
//  obj.setPersion("ajay",25,"male")
//  obj.printPersion()
var obj=new persion("ajay",25,"male")
 
 obj.printPersion()

//  console.log(obj.name);

 //instance variables
 //instance variable are always prefixed with this keyword
 //we can access instance variable by using this keyword inside class
 //we can access instance variable by using reference.variablename outside the class


 //constructor
