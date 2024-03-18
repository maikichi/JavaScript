//文字列をまとめた配列（配列に入っている値を要素と呼ぶ）
["apple","banana","orange"]
//  0        1       2     インデックス番号0から始まる

// 数値をまとめた配列
[21,43,12]


// ------配列の要素の取得--------
const animals =["dog","cat","sheep"];
console.log(animals[0]);
console.log(animals[2]);
// =>dog,sheep


// ------配列の要素の更新--------
const animals = ["dog","cat","sheep"];
animals[2]="rabbit";
console.log(animals[2]);
// =>rabbit


// ------配列と繰り返し①-------
const aanimals = ["dog","cat","sheep"];
for(let i = 0; i < 3; i ++){
    console.log(animals[i]);
}
// =>dog,cat,sheep


// ------配列と繰り返し②length（配列の要素数取得）-------
const fruits = ["apple","banana","orange"];
console.log(fruits.length);
for(let i = 0; i < fruits.length; i ++){
    console.log(fruits[i]);
}
// =>3,apple,banana,orange