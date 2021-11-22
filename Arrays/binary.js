var arr=[10,11,12,13,14]

arr.sort((num1,num2)=>num1-num2)
var element=1;

var low=0;
var upper=arr.length-1;
var flag=0;

while(low<=upper){
    let mid=Math.floor((low+upper)/2)

    if(element>arr[mid]){
        low=mid+1;
    }
    else if(element<arr[mid]){
        upper=mid-1;
    }
    else if(element==arr[mid]){
        flag=1;
        break
    }

}
console.log(flag==0?"element not found":"element found");