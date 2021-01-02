//method over riding

class parent{
    phone(){
        console.log("have nokia")

    }
}
class child extends parent{
    phone(){
        console.log("have iphone")
    }
}

var ch=new child()
ch.phone()