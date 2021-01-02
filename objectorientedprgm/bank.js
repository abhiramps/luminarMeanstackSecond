//crateacc()
//deposit()
//withdraw()
//balance()


class bank{

    static bankname(){      //static method
        console.log("sbi bank")
    }
    crateaccount(accno,name,mim_balance){
    this.accno=accno;
    this.name=name;
    this.mim_balance=mim_balance;
    }
    deposit(amount){
        this.mim_balance+=amount;
        console.log("your acc  "+this.accno+"  has been credited  "+amount+"  aval bal  "+this.mim_balance);

    }
    withdraw(amount){
        if(amount>this.mim_balance){
            console.log(" insuff balance ")

        }
        else{
            this.mim_balance-=amount
            console.log(" your acc  "+this.accno+"  has been debited "+amount+" aval bal "+this.mim_balance);

        }
    }

    balenq(){
        console.log(" aval bal is "+this.mim_balance)
    }
}
var obj=new bank
obj.crateaccount(1234,"abhi",500)
obj.deposit(100)
obj.withdraw(1000);
obj.balenq()
bank.bankname()//static method call






