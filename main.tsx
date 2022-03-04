class Person {
	name: string;
	age: number;

	constructor(name: string, age: number){
		this.name = name;
		this.age = age;
	}

	sayHello(){
		return `My name is ${this.name}. I'm ${this.age} years old.`;
	}
}

let p = new Person('Takumi', 19);
let s = p.sayHello();

document.getElementById('div1').innerHTML = s;