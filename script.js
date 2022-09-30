"use strict";
//..........................1
class Animal {
    constructor(name){
        this.name = name;
    }
    makeSound(){
        console.log("rrr, i'm an animal");
    }
}
class Dog extends Animal {
    constructor(name){
        super(name);
    }
    makeSound(){
        console.log("woof");
    }
} 
class Cat extends Animal {
    constructor(name){
        super(name);
    }
    makeSound(){
        console.log("meuw");
    }
} 

const animal1 = new Animal();
const animal2 = new Dog("Bili");
const animal3 = new Cat("Dini");


animal1.makeSound();
animal2.makeSound();
animal3.makeSound();


//.................................2


class customer {
    constructor (login, key, password){
        this.login = login;
        this.key = key;
        this._password = password;
    }
    get password(){
        return this._password;       
    }
    set password(newPass){
        this._password = newPass;       
    }
}

const customer1 = new customer("Astghik123",1994, "qwerty1");
console.log(customer1);
console.log(customer1.login);

// ........3.#
class User {
	constructor (nickName, password) {
		this.nickName = nickName;
		// this._password = password;
	}

	#password = "qwerty2"; // private filed

	say() {
		// console.log(`email: ${this.email} password: ${this.password}`);
		console.log(`nikcName: ${this.email}, password: ${this.#password}`);
	}

	get pass() {
		return this.#password;
	}

	set pass(a) {
		this.#password = a;
	}
}

const user1 = new User("Astghik1994");
console.log(user1.pass); // get
user1.pass = "qwerty3"; // set
console.log(user1.pass); // get


//...............static

class Human {
	static hello () {
		console.log("I am Human");
	}
	static res = "yes";
}

class Man extends Human {};

Human.hello();
Man.hello();

console.log("Human: " + Human.res);
console.log("Man: " + Man.res);


///////////////////


