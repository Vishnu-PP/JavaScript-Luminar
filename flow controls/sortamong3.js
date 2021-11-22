
// q3 sort without func

//console.log((num1>num2) && (num1>num3)? (num2>num3?num1 num2 num3:num1num3num2):(num2>num1)&&(num2>num3)?(num1>num3?num2,num1,num3:num2num3num1):  (num1>num2?num3num1num2:num3num2num1) );

var num1=10,num2=200,num3=300;

if((num1>num2) && (num1>num3)){
    (num2>num3?console.log(num1,num2,num3):console.log(num1,num3,num2));
}
else if((num2>num1)&&(num2>num3)){
    (num1>num3?console.log(num2,num1,num3):console.log(num2,num3,num1));
}
else{
    (num1>num2?console.log(num3,num1,num2):console.log(num3,num2,num1));

}