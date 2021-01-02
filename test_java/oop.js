class Persion{
     constructor(name, age, gender){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }


    printPersion(){
        console.log("name " + this.name + " age " + this.age + " gender " + this.gender)
    }
}
var obj = new Persion("abhi", 23, "male")
// obj.setPersion()
obj.printPersion()

// setPersion=(name,age,gender)=>{
//     this.name=name;
//     this.age=age; 
//     this.gender=gender
//     console.log(this.name+this.age)

// }

// setPersion("abhi",23,"male")
