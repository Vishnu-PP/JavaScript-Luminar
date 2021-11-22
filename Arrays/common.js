var arr=[12,20,30,40]
var arr1=[20,21,30,31]

var count=0;
for(let num1 of arr){
    for(let num2 of arr1){
        if (num1==num2){
            console.log(num1);

        }
    }
}
console.log(count);