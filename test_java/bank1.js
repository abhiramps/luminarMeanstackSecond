//account
//deposit
//withdraw
//var minbal=1000;
class bank{
   
    account(name,accno,phno,age,balance,bname){
        this.name=name;
        this.accno=accno;
        this.phno=phno;
        this.age=age;
        this.balance=balance;
        this.bname=bname;
    
    }
    deposit(amount){
       
      
        this.amount=amount;
        this.balance+=this.amount;
        console.log("dear "+this.bname+" user , your a/c "+this.accno+"is  credited rs "+amount);

    }
    withdraw(amount){
        this.amount=amount;
        if(this.balance<=this.amount)
        {
            // console.log("minimum balance is "+this.minbal);
            // console.log("withdrawal amount must be grater than "+this.balance)
            console.log(" insufficient balance transaction failed")
        }
        else{
         
            this.balance-=this.amount;
            console.log("transaction statuss: success ");
            console.log("amount "+this.amount+" is withdrawed sucdessfully");
           
        
        }
    }
    balEqu(){
        console.log("current balance is "+this.balance)
    }



}
var obj=new bank
obj.account("abhi",1233445,98764367,23,500,"sbi");
obj.deposit(101);
obj.withdraw(600)
obj.balEqu();
