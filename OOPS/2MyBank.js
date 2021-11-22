class Bank{
    createAccount(acno,p_name,ac_type,balance){
        this.name=p_name;
        this.acno=acno;
        this.ac_type=ac_type;
        this.balance=balance;
    }
    deposit(amount){
        this.balance+=amount;
        console.log(`your account ${this.acno} has been credited with amt ${amount} ur avl bal is ${this.balance}`);
    }
    withdrawal(amount){
        if(amount>this.balance){
            console.log("insuff fund tranc declined");
        }
        else{
            this.balance-=amount
            console.log(`your account ${this.acno} has been debited with amt ${amount} ur avl bal is ${this.balance}`);
        }
    }
    balanceInquiry(){
        console.log(`ac bal = ${this.balance}`);
    }

    
}

var obj=new Bank()
obj.createAccount(1000,"manu","savings",4000)
obj.deposit(5000)
obj.withdrawal(2000)
obj.balanceInquiry()