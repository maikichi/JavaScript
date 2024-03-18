/*---------------------
・オブジェクト
データと機能をまとめたもの

・プロパティ
オブジェクト内のデータに相当

・メソッド
オブジェクト内の機能に担当
-----------------------*/

// -------メソッド①（インスタンス.メソッド名()）---------
class Animal {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    greet(){
        console.log("こんにちは");
    }
}
const animal = new Animal("シャンシャン, 6");
console.log(`名前:${animal.name}`);
console.log(`年齢:${animal.age}`);
animal.greet();
// =>名前:シャンシャン,年齢:6,こんにちは


// -------メソッド②（this.プロパティ名）---------
class Aniamal {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    greet(){
        console.log("こんにちは");
    }
    info(){
        console.log(`名前は${this.name}です`);
        console.log(`${this.age}歳です`);
    }
}
const animal = new Animal("シャンシャン", 6);
animal.greet();
animal.info();
// =>こんにちは,名前はシャンシャンです,6歳です


// -------メソッド内でメソッドを使う---------
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
const animal = new Animal("シャンシャン", 6);
animal.info();
// =>こんにちは,名前はシャンシャンです、6歳です


