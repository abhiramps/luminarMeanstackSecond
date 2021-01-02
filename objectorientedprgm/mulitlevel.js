class parent{

    m1(){
        console.log("inside parent");

    }
}
class child extends parent{
    m2(){
        console.log("inside child")

    }
}
class subchild extends child{
    m3(){
        console.log("inside subchild");
    }
}

var sb=new subchild()
sb.m3()
sb.m2()
sb.m1()

var ch=new child()
//ch.m3()//error
ch.m2()
ch.m1()

var p=new parent()
//p.m3()//error
//p.m2()//error
p.m1()
