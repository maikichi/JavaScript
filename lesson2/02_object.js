// ------オブジェクト------
const fruits={name : "りんご", price : 150};
console.log(fruits)
// => name : "りんご", price : 150

// --------オブジェクトの値の取得・更新---------
const character = {name: "まる子", age: 12};
console.log(character.name);
character.age = 9;
console.log(character);
// =>まる子,{name: "まる子", age: 9}


// ------オブジェクトを要素に持つ配列①-------
const characters = [
    {name: "まる子", age: 9},
    {name: "みぎわさん", age: 9}
];
console.log(characters[0]);
console.log(characters[1].name);
// => {name:"まる子", age: 9},みぎわさん


// ------オブジェクトを要素に持つ配列②-------
const characters = [
    {name: "まる子", age: 9},
    {name: "しんちゃん", age: 5},
    {name: "のび太", age: 10},
];
for(let i = 0; i < characters.length ; i ++){
    console.log("---------------------");
    console.log(characters[i]);

    const character=characters[i];
    console.log(`名前は${character.name}です`);
    console.log(`${character.age}歳です`);
}
/* =>
---------------------
{name: "まる子", age: 9}
名前はまる子です
9歳です
---------------------
{name: "しんちゃん", age: 5}
名前はしんちゃんです
5歳です
---------------------
{name: "のび太", age: 10}
名前はのび太です
10歳です
*/ 


// ------undefinedの対応-------
const characters = [
    {name: "まる子", age: 9},
    {name: "しんちゃん", age: 5},
    {name: "のび太", age: 10},
];
for(let i = 0; i < characters.length ; i ++){
    console.log("---------------------");
    const character=characters[i];
    console.log(`名前は${character.name}です`);

    if(character.age===undefined){
        console.log("年齢は秘密です");
    }else{
        console.log(`${character.age}歳です`);
    }
}


// --------まとめ-----------
const cafe = {
    name:"ポムポムカフェ",
    businessHours: {
        opening: "10:00(AM)",
        closing: "8:00(PM)",
    }
};
console.log(`店名:${cafe.name}`);
console.log(`営業時間:${cafe.businessHours.opening}から${cafe.businessHours.closing}`);
// =>店名:ポムポムカフェ,営業時間:10:00(AM)から8:00（PM）
