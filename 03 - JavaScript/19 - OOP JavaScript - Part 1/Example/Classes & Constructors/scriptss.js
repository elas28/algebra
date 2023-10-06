class Foo{
    constructor(name) {
        this.name=name;
    }

    getNameSeparator() {
        return "-";
    }
}

class FooBar extends Foo {
    constructor(name,index) {
        super(name);
        this.index=index;
    }

    getFullName() {
        return this.name + super.getNameSeparator() + this.index;
    }
}

var firstFooBar= new FooBar("foo",1);
console.log(firstFooBar.name);
console.log(firstFooBar.getFullName());

class MyClass {
    static staticMethod() {
        console.log("this is a static method.");
    }
}

MyClass.staticMethod();