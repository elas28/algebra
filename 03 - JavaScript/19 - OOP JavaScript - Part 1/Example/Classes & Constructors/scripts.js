class Person {
    construtor(name){
        this.name=name;
    }
    talk() {
        return `Hello, my name is ${this.name}, I am talking`;
    }
}

var person1=new Person("Joanna");
console.log(person1.talk());

class SuperHuman extends Person()
console.log(person1.talk());

class SuperHuman extends Person {
    fly(){
return "flying";
    }
}

console.log(person1.fly());

class Foo {
    #private=123;
}

var foo= new Foo();
console.log(foo.private);