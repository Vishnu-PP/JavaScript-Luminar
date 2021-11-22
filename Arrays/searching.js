var arr=[10,11,12,13,14,15,16]

var element=150;
var flag=0;
var count=0;

for(let num of arr){
    if(num==element){
        flag=1;
        break;
        
    }
    count++
}
console.log(flag==1?"element found":"element not found");
console.log(count);

