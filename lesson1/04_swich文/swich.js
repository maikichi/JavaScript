// -----swich文 ①（※break忘れずに！,数字以外は""つける）------
const n = 2;

switch (n){
    case 1:
        console.log("大吉です");
        break;
    case 2:
        console.log("吉です");
        break;
    case 3:
        console.log("小吉です");
        break;
}
// =>吉です


// -----swich文 ②default（どこにも一致しなかった時の処理方法）------
const n = 4;

switch (n) {
    case 1:
        console.log("大吉です");
        break;
    case 2:
        console.log("吉です");
        break;
    case 3:
        console.log("小吉です");
        break;
    default:
        console.log("ハイパー大吉です");
        break;
}
// =>ハイパー大吉です