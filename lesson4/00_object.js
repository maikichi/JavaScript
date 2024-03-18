/*---------------------
・オブジェクト
データと機能をまとめたもの

・プロパティ
オブジェクト内のデータに相当

・メソッド
オブジェクト内の機能に担当
-----------------------*/

// ------オブジェクトの復習--------
const animal = {
    name: "レイレイ",
    age: 3,
    greet: () => {
        console.log("こんにちは！");
    }
};
console.log(animal.name);
animal.greet();
// =>レイレイ,こんにちは！


/*------クラス！インスタンスの生成（classの後は大文字で始める）--------
クラスから生成したオブジェクトをインスタンス*/
class Animal {
}
const animal = new Animal(); //インスタンス
console.log(animal);
// =>Animal{}
