/* -------オーバーライド①（メソッドver.）--------
親クラスと同じ名前のメソッドを子クラスに定義すると、子クラスのメソッドが優先して使用される。
子クラスのメソッドが親クラスのメソッドを上書きしていること*/

class Animal {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log("こんにちは");
    }
    info() {
        this.greet();
        console.log(`名前は${this.name}です`);
        console.log(`${this.age}歳です`);
    }
}
class Dog extends Animal {
    info(){
        this.greet();
        console.log(`名前は${this.name}です`);
        console.log(`${this.age}です`);

        const humanAge = this.getHumanAge();
        console.log(`人間年齢で${humanAge}歳です`);
    }
    getHumanAge() {
        return this.age * 7;
    }
}
const dog = new Dog("ココ", 2);
dog.info();
// =>こんにちは,名前はココです,2歳です,人間年齢で14歳です


/* -------オーバーライド②（コンストラクタver.）--------
子クラスにプロパティを追加したい場合に使用！　1行目に「super()」記載必要*/

class Animal {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log("こんにちは");
    }
    info() {
        this.greet();
        console.log(`名前は${this.name}です`);
        console.log(`${this.age}歳です`);
    }
}
class Dog extends Aniamal {
    constructor(name,age,breed){
        super(name, age);                               //←super記載
        this.breed = breed;
    }
    info() {
        this.greet();
        console.log(`名前は${this.name}です`);
        console.log(`犬種は${this.breed}です`);
        console.log(`${this.age}歳です`);
        const humanAge = this.getHumanAge();
        console.log(`人間年齢で${humanAge}歳です`);
    }
    getHumanAge() {
        return this.age * 7;
    }
}
const dog = new Dog("ココ", 2,"ティーカッププードル");
dog.info();
// =>こんにちは,名前はココです,犬種はティーカッププードルです,2歳です,人間年齢で14歳です


// ----------◾️ 例（chat GPT）-----------------
// 親クラスの定義
class Vehicle {
    constructor(make, model) {
      this.make = make;
      this.model = model;
    }
  
    info() {
      console.log(`This is a ${this.make} ${this.model}.`);
    }
  }
  
  // 子クラスの定義
  class Car extends Vehicle {
    constructor(make, model, color) {
      super(make, model); // 親クラスのコンストラクタを呼び出す
      this.color = color;
    }
  
    drive() {
      console.log(`The ${this.color} ${this.make} ${this.model} is driving.`);
    }
  }
  
  // Car クラスのインスタンスを生成して使用する
  const myCar = new Car("Toyota", "Corolla", "blue");
  myCar.info(); // 出力: This is a Toyota Corolla.
  myCar.drive(); // 出力: The blue Toyota Corolla is driving.

