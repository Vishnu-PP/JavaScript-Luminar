var num1=10,num2=10,num3=30;
// q1 print largest among 3

console.log((num1>num2) && (num1>num3)?num1:(num2>num1)&&(num2>num3)?num2:(num1==num2) && (num2==num3)?"Numbers equal":num3);