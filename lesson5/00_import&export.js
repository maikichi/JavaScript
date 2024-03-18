/* -----------ファイルの分割（export:出力）-----------
「animal.js」内のAnimalクラスを他のファイルでも使用できるようにする
クラスの定義の後（最下部）で「export default クラス名」とすることで、そのクラスをエクスポート（出力）し、他のファイルへ渡すことができる*/

class Animal{
    ︙
}
export default Animal;


/* -----------ファイルの分割（import:読込）-----------
「dog.js」内でAnimalクラスを使用できるようにする
他のファイルで定義されているクラスを使用するにはインポート（読込）をする必要がある。
使用するファイルの先頭（最上部）で「import クラス名 from "./ファイル名"」と書くことでインポートすることができる。※ファイル名の拡張子の「.js」は省略すること可能*/

import Dog from "./dog.js"; // "./ファイル名"
    ︙
const dog = new Dog("ココ", 2,"ティーカッププードル");
dog.info();


// ----文字列や数値や関数などのエクスポート「export default 定数名」----
const text ="Hello World";
export default text;

// -----文字列や数値や関数などのインポート「import 定数名 from "./ファイル名"」-----
import text from "./samplr1";
console.log(text);


// -----名前付きエクスポート①------
const dog1 = new Dog("ココ", 2,"ティーカッププードル");
export { dog1 };

import { dog1 }from"./dogData";
dog1.info();


/* -----名前付きエクスポート②「export { 名前1, 名前2 }」------
デフォルトエクスポートと違い、複数の定数やクラスを指定してエクスポートができる*/

const dog1 = new Dog("ココ", 2,"ティーカッププードル");
const dog1 = new Dog("マリン", 14,"トイプードル");

export { dog1, dog2 }; //エクスポート
//-------------------------------------------------
import { dog1, dog2 } from "./dogData"; //インポート
console.log("------");
dog1.info();
console.log("------");
dog1.info();


/* -------相対パス①（異なるディレクトリのファイル指定）---------
import {dog1, dog2} from "./data/dogData";
                             ① 　　　②
①./data/  :同じディレクトリ内のdataディレクトリに移動
②dogData  :dogData.jsを指定*/



/* -------相対パス②（1つ上の階層に戻る）---------
import Dog from "../class/dog";
                 ① 　②    ③
①../     :1つ上の階層に移動
②class/  :classディレクトリに移動
③dog     :dog.jsを指定
*/

/* ------（2つ上の階層に戻る）---------
import Dog from "../../class/dog"; */