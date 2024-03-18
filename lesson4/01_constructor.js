/*---------------------
・オブジェクト
データと機能をまとめたもの

・プロパティ
オブジェクト内のデータに相当

・メソッド
オブジェクト内の機能に担当
-----------------------*/

// -----コンストラクタ①（コンストラクタの処理）------                                   要確認！！！
class Animal{
    constructor(){
        console.log("動物は癒されます");
    }
}
const animal = new Animal();
// =>動物は癒されます


// -----コンストラクタ②（インスタンスとプロパティ）------　　　　　　　　　　　　　　　　　　　要確認！！！
class Animal {
    constructor(){
        this.name = "ココ";
        this.age = 3;
    }
}
const animal = new Animal();
console.log(`名前: ${animal.name}`);
console.log(`年齢: ${animal.age}`);
// =>名前:ココ,年齢:3


// -----コンストラクタ③（コンストラクタの引数）------                                     要確認！！！
class Animal {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}
const animal = new Animal("ココ", 3);
console.log(`名前:${animal.name}`);
console.log(`年齢:${animal.age}`);
// =>名前:ココ,年齢:3