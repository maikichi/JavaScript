/* -------クラスの継承（extends）-------
「Animalクラス」を継承して「Dogクラス」を作成するには、「class Dog extends Animal」*/
class Animal {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    greet(){
        console.log("こんにちは");
    }
    info(){
        this.greet();
        console.log(`名前は${this.name}です`);
        console.log(`${this.age}歳です`);
    }
}
class Dog extends Animal{
}
const dog = new Dog("シャンシャン", 7);
dog.info();
// =>こんにちは,名前はシャンシャンです,7歳です


// -------継承（メソッドの追加）--------
class  Animal {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    greet(){
        console.log("こんにちは");
    }
    info(){
        this.greet();
        console.log(`名前は${this.name}です`);
        console.log(`${this.age}歳です`);
        }
    }
class Dog extends Animal{
    getHumanAge(){
        return this.age * 7;
    }
}  
const dog = new Dog("ココ", 2);
dog.info();

const humanAge = dog.getHumanAge();
console.log(`人間年齢で${humanAge}歳です`);
// =>こんにちは,名前はココです,2歳です,人間年齢で14歳です
