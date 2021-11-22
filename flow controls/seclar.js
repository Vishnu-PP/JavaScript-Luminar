var num1=1000,num2=200,num3=300;
// q2 print sec largest
if((num1>num2) && (num1>num3)){
    console.log(num2>num3?num2:num3);
}
else if((num2>num1)&&(num2>num3)){
    console.log(num1>num3?num1:num3);
}
else{
    console.log(num1>num2?num1:num2);

}
//console.log((num1>num2) && (num1>num3)? (num2>num3?num2:num3):(num2>num1)&&(num2>num3)?(num1>num3?num1:num3):  (num1>num2?num1:num2) );

