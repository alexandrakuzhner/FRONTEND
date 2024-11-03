//Математические операторы

let sum = 5 + 10;
console.log(sum);

let min = 20 - 7;
console.log(min);

let res = 8 * 3;
console.log(res); //24

let res1 = 15 / 3;
console.log(res1); //5

let res2 = 17 % 5;
console.log(res2); //2

let x = 10;
x++;
console.log(x);

let y = 7;
y--;
console.log(y);

let res3 = 2 ** 4;
console.log(res3);

let z = 10;
z += 5;
console.log(z); //15

let a = 6;
a *= 3;
console.log(a);//18

//Операторы сравнения JS

console.log(5 > 3);//true

console.log(7 <= 7);//true

console.log(10 == "10");//true - не строгое сравнение

//== - не строгое сравнение, сравнивает только значения
//=== - строгое сравнение, сравнениевает и тип данных

console.log(0 === false); //false, разные типы данных

console.log("apple" > "banana");//false

console.log(null == undefined);//true

console.log(NaN == NaN); //false

console.log(5 != "5"); //false

console.log("5" !== 5); //true

//Преобразования в JS явные и неявные

const num = 10;
const num1 = String(num);
console.log(typeof num1);

const num3 = "5" * 2;// математические операции с типом строка всегда преобразовывают в строку

console.log(Number("20"));//20 number

const boolean = Number(true);
console.log(typeof boolean);

const rtz = 5 + "5"
console.log(typeof rtz);//string

const undef = Number(undefined); // вернёт NaN

const nnn = null + 5;
console.log(nnn);// при математических операциях null = 0

const str = parseInt("123abc");
console.log(str);

console.log(Boolean(0));// выведёт false, потому что 0 считается ложгым значением

console.log(String(false));//false, преобразует в строку сохраняя чисто текст

//Взаимодействие с пользоватем: ALERT, PROMPT, CONFIRM

alert("Привет, мир!");

let userName = prompt("Введите Ваше имя: ");
console.log("Привет, " + userName + "!");

let userConfirmed = confirm('Вы уверены?');
console.log(userConfirmed); 

let sum1 = prompt("Введите первое число: ");
let sum2 = prompt("Введите второе число: ");
alert(sum1 + sum2);

let x = 42;
alert("Значение переменной x: " + x);

let userInput = prompt("Введите что-нибудь: ");

// if (userInput === null) {
    // alert('Вы нажали "Отмена".');
// } else {
    // alert('Вы ввели: ' + userInput);
// }
// 
alert("Hello\nтеперь вторая строка\nworld");

let result = prompt("Введите число, чтобы узнать его квадрат: ");
alert(result ** 2); 

let userConfirmed1 = confirm("Продолжить?");
console.log(userConfirmed1);

let userInput1 = prompt("Введите что-нибудь: ", "значение по умолчанию");






























