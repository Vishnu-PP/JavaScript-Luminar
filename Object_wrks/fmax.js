function smartMax(...nums){
    return nums.reduce((n1,n2)=>n1>n2?n1:n2)
}
console.log(smartMax(10,20,40));