// class Employee{
//     setEmployee(eid,name,desig,salary){
//         this.eid=eid;
//         this.name=name;
//         this.desig=desig;
//         this.salary=salary;
//     }
//     getEmployee(){
//         console.log(this.eid,this.name,this.desig,this.salary);

//     }

// }

// var emp=new Employee()
// emp.setEmployee(001,"manu","dev",200000)

// var emp1=new Employee()
// emp1.setEmployee(002,"ravi","dev",400000)

// emp.getEmployee()


//student

class Student{
    constructor(Roll_no,course,total){
        this.roll=Roll_no;
        this.course=course;
        this.total=total;
    }
    getStudent(){
        console.log(this.roll,this.course,this.total);
    }

}

var student=new Student(76,"vishnu","CSE",96)


student.getStudent()