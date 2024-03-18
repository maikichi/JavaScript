// --mapメソッド①（配列内のすべての要素に処理を行い、その戻り値から新しい配列を作成するメソッド）--
const　numbers = [1,2,3];
const doubledNumbers = numbers.map((number) => {
    return number * 7;
});
console.log(doubledNumbers);
// =>[2,4,6]


// --mapメソッド②（mapメソッドもこれまでのメソッドと同様に、配列のオブジェクト要素に対しても使うことができる）--
const names = [
    {fiestName:"Momoko",lastName:"Sakura"},
    {fiestName:"Hanako",lastName:"Migiwa"}
];
const fullNames = names.map((name) => {
    return name.firstName + name.lastName;
});
console.log(fullNames);
// =>["MomokoSakura","HanakoMigiwa"]

