class Bank {
    session = {}
    account_details = {
        1000: { account_number: 1000, balance: 3000, password: "userone", transactions: [] },
        1001: { account_number: 1001, balance: 2000, password: "usertwo", transactions: [] },
        1002: { account_number: 1002, balance: 4000, password: "userthree", transactions: [] },
        1003: { account_number: 1003, balance: 5000, password: "userfour", transactions: [] }
    }
    register(){
        if(this.validateAcno(account_number)){
            console.log("accno exist");
        }
        else{
            this.account_details[account_number]={
                account_number:account_number,
                balance:balance,
                password:password,
                transactions:[]
            }
            console.log("acc created success");
        }
    }
    validateAcno(accno) {            //function for validating accno
        if (accno in this.account_details) {
            return true
        }
        else {
            return false
        }

    }

    auth(accno, password) {
        if (this.validateAcno(accno)) {

            let pwd = this.account_details[accno].password

            if (password == pwd) {
                return 1 //sucss
            }
            else {
                return 0 //pass inv
            }
        }
        else {
            return -1 //inv acc
        }

    }
    login(accno, password) {
        let user = this.auth(accno, password)
        if (user == 1) {
            this.session["user"] = accno // session
            //console.log("access ganted");
        }
        else {
            console.log("access denied");
        }

    }
    getBalance(acno) {
        return this.account_details[acno].balance
    }
    balanceEnquiry() {  // return bal of auth user
        if ("user" in this.session) {
            let logged_user = this.session["user"]
            let avl_bal = this.account_details[logged_user].balance
            console.log(avl_bal);
        }
        else {
            console.log("you must login");
        }

    }
    logOut() {
        if ("user" in this.session) {
            delete this.session["user"]
        }
        else {
            console.log("login first");
        }
    }
    
    fundTransfer(amount, to_acno, confirm_toacno) {
        if ("user" in this.session) {


            if (to_acno == confirm_toacno) {
                if (this.validateAcno(to_acno)) {
                    let logged_user = this.session["user"]
                    let cur_balance = this.getBalance(logged_user)
                    if (amount > cur_balance) {
                        console.log("insuf fund trans cancel");
                    }
                    else {
                        this.account_details[logged_user].balance -= amount
                        this.account_details[to_acno].balance += amount
                        let bal = this.getBalance(logged_user)
                        console.log(`acc deb with ${amount} aval bal ${bal}`);
                        let transaction = { to: to_acno, amount: amount }
                        this.account_details[logged_user].transactions.push(transaction)
                    }

                }
                else {
                    console.log("inva accnno");
                }
            }
            else {
                console.log("acno number mismsath");
            }

        }
        else {
            console.log("login first");
        }

    }
    paymentHistory(){
        let logged_user = this.session["user"]
        let transactions=this.account_details[logged_user].transactions
        console.log(transactions);
        
    }

}

var obj = new Bank()
obj.login(1000, "userone");
obj.balanceEnquiry()
obj.logOut()
obj.balanceEnquiry()
obj.login(1000, "userone");
obj.fundTransfer(2000,1002,1002);
obj.fundTransfer(500,1002,1002);
obj.balanceEnquiry()
obj.paymentHistory()


























// function validate(accno){
//     return accno in account_details?true: false
// }
// function auth(accno,pass){
//     if(validate(accno)){
//         let pwd=account_details[accno].password
//         return pass==pwd?"auth sucess":"inv pass"
//         // if(pass==pwd){
//         //     console.log("auth success");
//         // }
//         // else{
//         //     console.log("invalid pass");
//         // }
//     }
//     else{
//         console.log("invalid aacno");
//     }
// }
