var employees=[
    [1000,"ram","developer",25000,1990,2005],
    [1001,"ravi","developer",27000,2000,2003],
    [1002,"raju","ba",26000,1995,2005],
    [1003,"nikil","mrkt",24000,2000,2007]

]


//** print emp_name and exp of each employee?

// for(let emp of employees){
//     console.log(emp[1],emp[5]-emp[4]);
    
// }

//map----

// var emp_name=employees.map(emp=>emp[1])
// console.log(emp_name);

//** print details of employees whose salary > 25000

// for(let emp of employees){
//     if(emp[3]>25000)
//     console.log(emp);
// }

//filter----

// var emp_name=employees.filter(emp=>emp[3]>25000)
// console.log(emp_name);



// print highest paid employee





// print lowest paid employee

// print most experienced employee



//** p exp of each emp

// var emp_exp=employees.map(emp=>emp[5]-emp[4])
// console.log(emp_exp);

//** p exp of each emp with emp name
//  var emp_exp=employees.map(emp=>[emp[5]-emp[4],emp[1]])
//  console.log(emp_exp);


//**add 200 to salary all emp */
// var emp_salary=employees.map(emp=>emp[3]+2000)
// console.log(emp_salary);