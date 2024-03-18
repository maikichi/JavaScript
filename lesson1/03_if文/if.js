// -----if文--------
const level=12;
if(level>10){
    console.log("レベルが10より大きいです");
}
// =>レベルが10より大きいです


// -----透過演算子（比較演算子）------
a==b //aとbが等しい
a!=b //aとbが異なる

// -------厳密等価演算子----------
a===b //aとbが厳密に等しい
a!==b //aとbが厳密に異なる


const  password="cocochan";
if(password==="cocochan"){
    console.log("ログインに成功しました");
}
if(password!=="cocochan"){
    console.log("パスワードが間違っています")
}
// =>ログインに成功しました


// -------else-----------
const age= 17;
if(age>=20){
    console.log("私は２０歳以上です");
}else{
    console.log("私は２０歳未満です");
}
// =>私は２０歳未満です


// ------else if----------
const age = 17;
if (age >= 20){
    console.log("私は20歳以上です");
} else if(age >= 10){
    console.log("私は20歳未満ですが、10歳以上です");
}else{
    console.log("私は10歳未満です");
}
// =>私は20歳未満ですが、10歳以上です


// -----複数の条件式『かつ』&&-------
const age = 24;
if(age>=20 && age<30){
    console.log("私は20代です")
}
// =>私は20代です

