// ------findメソッド①（条件式に合う1つ目の要素を配列の中から取り出すメソッド）※条件に合う最初の1つの要素しか取り出せない-------
const numbers = [1,3,5,7];
const foundNumber = numbers.find((number) => {
    return number > 3;
});
console.log(founndNumber);
// =>5

// ----findメソッド②（配列の要素がオブジェクトの場合）-----
const characters =[
    {id : 1 ,name: "ポムポムプリン"},
    {id : 2 ,name: "シナモン"}
];
const foundCharacter = characters.find((character) => {
    return character.id === 1;
});
console.log(foundCharacter);
// =>{id : 1 ,name: "ポムポムプリン"}




// --filterメソッド①（記述した条件に合う要素のみを取り出して新しい配列を作成するメソッド）※findと異なり全て取り出す--
const numbers = [1,3,5,7];
const filteredNumbers = numbers.filter((number) => {
    return number > 3;
});
console.log(filteredNumbers);
// =>[5,7]


// --filterメソッド②（配列の要素がオブジェクトの場合もfilterメソッドを使うことができる）※findと異なり全て取り出す--
const characters = [
    {name:"シロ",age:6},
    {name:"まる子",age:9},
    {name:"ドラえもん",age:12}
];
const filteredCharacters = character.filter((character) =>{
    return character.age < 10;
});
console.log(filteredCharacters);
// => [{name:"シロ",age:6},{name:"まる子",age:9}]

