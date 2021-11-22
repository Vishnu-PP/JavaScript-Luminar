var arr=[2,3,4,5,6,7,8]
var low=0, upper=arr.length-1;
var sum=10;

while(low<upper){
    let total=arr[low]+arr[upper]
    if(total==sum){
        console.log(${arr[low]},${arr[upper]});
        break;
    }
    else if(total>sum){
        upper-=1
    }
    else if(total<sum){
        low+=1
    }
}