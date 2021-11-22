class Bank {
    session={}
    account_details = {
        1000: { account_number: 1000, balance: 3000, password: "userone", transactions: [] },
        1001: { account_number: 1001, balance: 2000, password: "usertwo", transactions: [] },
        1002: { account_number: 1002, balance: 4000, password: "userthree", transactions: [] },
        1003: { account_number: 1003, balance: 5000, password: "userfour", transactions: [] }
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

            let pwd =this.account_details[accno].password

            if (password==pwd){
                return 1 //sucss
            }
            else{
                return 0 //pass inv
            }
        }
        else{
            return -1 //inv acc
        }

    }
    login(accno,password){
        let user=this.auth(accno,password)
        if(user==1){
            this.session["user"]=accno // session
                 //console.log("access ganted");
        }
        else{
            console.log("access denied");
        }

    }
    balanceEnquiry() {  // return bal of auth user
        if("user" in this.session){
            let logged_user=this.session["user"]
            let avl_bal=this.account_details[logged_user].balance
            console.log(avl_bal);
        }
        else{
            console.log("you must login");
        }

    }
    logOut(){
        if("user" in this.session){
            delete this.session["user"]
        }
        else{
            console.log("login first");
        }
    }
    fundTransfer(to_cno, amount) {

    }

}

var obj = new Bank()
obj.login(1000, "userone");
obj.balanceEnquiry()
obj.logOut()
obj.balanceEnquiry()
obj.login(1000, "userone");


























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
