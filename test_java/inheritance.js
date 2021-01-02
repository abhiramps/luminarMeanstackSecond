class GrandParent
{
    grandFather(){
        console.log("grandfather")
    }
    grandMother(){
        console.log("grandmother")
    }

}
class parents extends GrandParent{

    father(){
        console.log("father")
    }
    mother(){
        console.log("mother")
    }

}
class child extends parents{
    ch(){
        console.log("child")
    }

}

var gp=new GrandParent()
gp.grandFather()
gp.grandMother()
//gp.father()
//gp.mother()
//gp.ch()


var par=new parents()
par.grandFather()
par.grandMother()
par.father()
par.mother()
//par.ch()

var c=new child()
c.grandFather()
c.grandMother()
c.father()
c.mother()
c.ch()

