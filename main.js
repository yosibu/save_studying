var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.sayHello = function () {
        return "My name is ".concat(this.name, ". I'm ").concat(this.age, " years old.");
    };
    return Person;
}());
var p = new Person('Takumi', 19);
var s = p.sayHello();
document.getElementById('div1').innerHTML = s;
