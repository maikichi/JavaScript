// --------変数の復習---------
let number = 0;
number += 1;
console.log(number);
number += 1;
console.log(number);
number += 1;
console.log(number);
number += 1;
console.log(number);
number += 1;
console.log(number);
// =>1,2,3,4,5


// --------while文---------
let number = 1;
while(number <= 100){
    console.log(number);
    number += 1;
}
// =>1~100まで出る


// -----for文（whileよりシンプルに書ける）-----
for(let number = 1; number <= 100; number ++){
    console.log(number);
}
// =>1~100まで出る

// -------繰り返し処理のまとめ-------
for(let number = 1; number <= 100; number ++){
    if(number %3 === 0){
        console.log("3の倍数です");
    }else{
        console.log(number);
    }
}
// =>1~100まで出て、3の倍数の数字のみ3の倍数ですと表示される
