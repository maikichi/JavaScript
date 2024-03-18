// パッケージのimport（import 定数名 from "パッケージ名";）

// ------パッケージ① chalk（色付け）--------
import chlk from "chalk";
console.log(chalk.yellow("Hello World")); //黄色にする
console.log(chalk.bgCyan("Hello World")); //文字列を囲む


// パッケージ② readline-sync（コンソールへの値の入力と、その入力された値をプログラムの中で使うことができる）
import readlineSync from "readline-sync";
const name = readlineSync.question("名前を入力してください：");
console.log(`${name}と入力されました`);
// =>名前を入力してください：キキ,キキと入力されました


// ---整数の入力（question→questionlntに変更）----
const name = readlineSync.question("名前を入力してください:");
const age = readlineSync.questionlnt("年齢を入力してください");


