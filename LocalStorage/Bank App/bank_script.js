class Bank {

    validateAccount(acno) {
        return acno in localStorage ? true : false
    }

    createAccount() {
        let acc_no = bk_acno.value;
        let email = bk_email.value;
        let phone = bk_phn.value;
        let balance = 2000
        let password = bk_pass.value;

        let account = {
            acc_no, email, phone, balance, password
        }
        // console.log(account);



        if (this.validateAccount(acc_no)) {
            alert("Failed! Account exist");
            window.location.href = "./login.html"

        }

        else {
            localStorage.setItem(acc_no, JSON.stringify(account))
            alert("Success! Account Created");
            window.location.href = "./HomePage.html"
            
        }
    }
    auth(acno, password) {
        if (this.validateAccount(acno)) {
            let user = JSON.parse(localStorage.getItem(acno))
            if (user.password == password) {
                return 1;

            }
            else {
                return 0;
            }

        }
        else {
            return -1;
        }
    }
    login() {
        let username = bk_username.value;
        let paswword = bk_password.value;
        let user = this.auth(username, paswword)
        console.log(user);
        if (user == 1) {
            sessionStorage.setItem("user", username)
            alert("Access Grated")
            window.location.href = "./HomePage.html"



        }
        else {
            alert("Access Denied")
        }
        
    }
    getUser(){
        let user = sessionStorage.getItem("user")
        let welcome=document.querySelector(".wel")
        welcome.innerHTML=`<h1 class="text-center">WELCOME ${user}!</h1>`
        
       

    }
    getUserDataFromLocalStorage(acno){
        return JSON.parse(localStorage.getItem(acno))
    }
    balanceEnquiry(){
        let loggeduser=sessionStorage.getItem("user")
        let loggeduserdata=this.getUserDataFromLocalStorage(loggeduser)
        let bal=loggeduserdata.balance;
        return bal
        // alert(`Available Balance : ${loggeduserdata.balance}`)
    }
    balanceEnq(){
        let loggeduser=sessionStorage.getItem("user")
        let loggeduserdata=this.getUserDataFromLocalStorage(loggeduser)
        let bal=loggeduserdata.balance;
        alert(`Available Balance : ${loggeduserdata.balance}`)
    }

    fundTransfer(){
        let payee_acno=sessionStorage.getItem("user")
        let to_acno=bk_toacno.value;
        let confirm_toacno=bk_ctoacno.value;
        let amount=Number(bk_amt.value)
        if(to_acno==confirm_toacno){
            if(this.validateAccount(to_acno)){
                let avl_bal=this.balanceEnquiry()
                
                if(amount>avl_bal){
                  alert("Insufficient Fund")

                }
                else{
                    let payee=this.getUserDataFromLocalStorage(payee_acno)
                    let to_account=this.getUserDataFromLocalStorage(to_acno)
                    let bal=avl_bal-amount
                    payee.balance=bal
                    localStorage.setItem(payee_acno,JSON.stringify(payee))

                    let to_cur_bal=Number(to_account.balance)
                    to_cur_bal+=amount
                    to_account.balance=to_cur_bal
                    localStorage.setItem(to_acno,JSON.stringify(to_account))
                    alert("Payment Success")
                    
                }

            }
            else{
                alert("Invalid Account Number")
            }

        }
        else{
            alert("Account Number Mismatch")
        }



    }
    logout() {
        if ("user" in sessionStorage) {
            sessionStorage.removeItem("user")
            window.location.href = "./login.html"
        }
        else {
            console.log("invalid");
        }
    }
}
var bank = new Bank();
