// -----pushメソッド（配列の最後に新しい要素を追加するメソッド）------
const numbers = [1,2,3];
console.log(numbers);
numbers.push(4);
console.log(numbers);
// [1,2,3],[1,2,3,4]

const human = ["リサ","ジェニー","ジス"];
console.log(human);
numbers.push("ロゼ");
console.log(human);
// ["リサ","ジェニー","ジス"],["リサ","ジェニー","ジス","ロゼ"]


// ---forEachメソッド（配列の中の要素を1つずつ取り出して、全ての要素に繰り返し同じ処理を行うメソッド）---
const numbers =[1,2,3];
numbers.forEach((number) => {console.log(number);});
/*             ----------------------------------- ←コールバック関数

↓長くなりやすいため、以下のように書く */

numbers.forEach((number) => {
    console.log(number);
});     
// =>1,2,3                                            








