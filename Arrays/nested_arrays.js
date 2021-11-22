var employees=[
    [1000,"ram","developer",25000,1990,2005],
    [1001,"ravi","developer",26000,2000,2003],
    [1002,"raju","ba",26000,1995,2005],
    [1003,"nikil","mrkt",24000,2000,2007]

]

//prit names

// for(let emp of employees){
//     console.log(emp[1]);
// }

//print developers

for(let emp of employees){
    if(emp[2]=="developer")
    console.log(emp[1]);
}