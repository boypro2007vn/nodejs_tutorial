class Person {
  constructor(name, age){
    this.name = name;
    this.age = age;
  }
  getInfo(){
    return `${this.name}: ${this.age} tuoi `;
  }
  toString(){
    return JSON.stringify(this);
  }
}

// var p1 = new Person('Pho', 18);
// console.log(p1.toString());

class Child extends Person{
  constructor(name, age, hobby){
    super(name, age);
    this.hobby = hobby;
  }
  getInfo(){
    return `${this.age}: ${this.name}`
  }
  sayHello(){
    return `Xin chao, em la ${this.name}, em thich choi ${this.hobby}`
  }
}

var p2 = new Child('Son', 3, 'Oto');
console.log(p2.sayHello());
