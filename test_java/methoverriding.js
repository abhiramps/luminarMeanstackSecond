//method overriding

class parent{
    constructor(){
        console.log("constructor")
    }
    phone(){
        console.log("i have nokia ")
    }
}
class child extends parent{

    constructor(){
        super()
    }
    
    phone(){
        console.log("i have iphone 12")
    }

}
// var p=new parent()
// p.phone()
var ch=new child()
 ch.phone()

//need 2 ore more class and inheritance