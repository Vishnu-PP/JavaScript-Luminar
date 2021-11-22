 var arr=[2,6,7,3,4]

// var op=[]


// for(let num of arr){
//     if(num<5){
//        op.push((num-=1))
//     }
//     else if(num>5){
//         op.push((num+=1))
//     }
//     else if(num==5){
//         op.push(num)

//     }
// }
// console.log(op);

var map=arr.map(num=>num>5?num-1:num<5?num+1:num)

console.log(map);