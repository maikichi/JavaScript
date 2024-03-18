## 定数と変数の違い
変数は1度代入した値を更新することができたが、定数は値を更新することはできない！

`変数`
```rb
let name="jisoo";
console.log(name);//jisoo
name= "lisa";
console.log(name);//lisa
```
`定数`
```rb
const name="jisoo";
console.log(name);//jisoo
name= "lisa";
console.log(name);//error
```
### 定数のメリット
「後から値を更新できない」ところ。一見不便に感じるかもしれないが、予期せぬ更新を防ぐことができ、より安全なコードを書くことができる。これはコードの量が増えるにつれて徐々にメリットとして感じる