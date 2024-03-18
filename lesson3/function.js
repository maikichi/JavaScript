// -------関数とは function(){------
const greet = function(){
    console.log("こんにちは！");
    console.log("今日も頑張りましょう！");
}
greet();
// =>こんにちは！今日も頑張りましょう！


//---アロー関数 「function（）」を「()=>」でシンプルに書ける---
const greet = ()=>{
    console.log("こんにちは！");
}
greet();
// =>こんにちは！


// -------引数とは--------
const greet = (name) =>{
    console.log(`こんにちは、${name}さん`);
}
greet("lisa");
// =>こんにちは、lisaさん


// -------複数の引数--------
const add = (number1,number2) =>{
    console.log(number1 + number2);
}
add(5,7);
// =>12


// --------戻り値 return--------
const half = (number) =>{
    return number/2;
}
const result = half(130);
console.log(`130の半分は${result}です`);
// =>130の半分は65です 


// --------戻り値の活用--------
const check = (number) => {
    return number % 3 === 0;
}
if (check(123)){
    console.log("3の倍数です");
} else {
    console.log("3の倍数ではありません");
}
// =>3の倍数です


// ---------スコープ-------
const name = "キキちゃん" ;
const introduce = () => {
    const name = "ララちゃん" ;
    console.log(name);
}
introduce();
console.log(name);
// => ララちゃん,キキちゃん


// ------時間を分に換算-------
const toMinutes = (hour, minute) => {
    return hour * 60 + minute;
}
const result = toMinutes(3, 20);
console.log(`${result}分`);
// =>200分
