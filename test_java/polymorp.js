//polymorphism
//method overloading

class shapes{

    area(){
        console.log("square");
    }
    area(no1){
        this.no1=no1;
        console.log("triangle")

    }
    area(no1,no2){
        this.no1=no1;
        this.no2=no2;
        console.log("rectangle")
    }

}
var ar=new shapes()
ar.area(1,2);

//same methodname diff arguments
//in javascript,will execute only recently implemented methods