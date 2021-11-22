// Polymorphism
    //method over loading[same method name, different no of parameters]
    //method overridng

    class MyMaths{
        // add(){
        //     console.log("no");
        // }
        // add(){
        //     console.log("2");
        // }
        // add(){
        //     console.log("3");
        // }
        add(...args){
            console.log(args);
            console.log("no meth overloading");
        }
    }
    var obj=new MyMaths()
    obj.add(10,20,30)
    obj.add(10,20)
    obj.add()

/// method overriding
    class Parent{
        bike(){
            console.log("passion pro");
        }

    }
    class Child extends Parent{
        bike(){
            console.log("beneli");
        }


    }
    var obj=new Child()
    obj.bike();