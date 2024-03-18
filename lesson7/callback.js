// --コールバック関数（JavaScriptでは引数に関数を渡すことができる。引数に渡される関数のこと）--
const character = () => {
    console.log("ちびまる子ちゃん");
};
const call = (callback) => {
    console.log("さぁみんな集まってちびまる子ちゃんが始まるよ");
    callback ();
};
call(character);
// =>さぁみんな集まってちびまる子ちゃんが始まるよ,ちびまる子ちゃん


// ---コールバック関数の直接定義（関数を直接引数の中で定義することもできる）※1~4行を最下部に持ってくる---
const character = () => {
    console.log("ドラえもん");
};
const call = (callback) => {
    console.log("さぁみんな集まってちびまる子ちゃんが始まるよ");
    callback ();
};
call(() => {
    console.log("ちびまる子ちゃん");
});
// =>さぁみんな集まってちびまる子ちゃんが始まるよ,ドラえもん,さぁみんな集まってちびまる子ちゃんが始まるよ,ちびまる子ちゃん


// コールバック関数の引数
const call = (callback) => {
    callback("ココちゃん", 2);
};
call((name,age) =>{
    console.log(`${name}は${age}歳です。`);
});
// =>ココちゃんは2歳です。