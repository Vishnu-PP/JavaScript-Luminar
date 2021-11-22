class Parent{
    phone(){
        console.log("have nokia 6611");
    }
}
class Child extends Parent{ //extends for inheriting

}
var obj=new Child();
obj.phone()
// console.log(obj.__proto__.__proto__);