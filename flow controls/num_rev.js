var num=123;
var res=""

while(num!=0){
    let digit=num%10;//123%10=3 
    res+=digit
    num=Math.floor(num/10);//
}
console.log(res);