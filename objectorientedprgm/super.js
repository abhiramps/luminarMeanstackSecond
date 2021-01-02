class parent{
    constructor(){
        console.log("inside parent")

    }

}
class child extends parent{
    constructor(){
        super()
        console.log("inside child constructor")
    }
}
var ch=new child();