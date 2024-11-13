// ФУНКЦИИ
// 1. Написать функцию, которая принимает в качестве аргументов два числа и возращает их сумму

let sum = (a, b) => a + b;
console.log(sum(4, 8));


function sum1(a, b) {
    return a + b;
}
console.log(sum1(5, 4));

// 2. Написать функцию, принимающую массив с числами в качестве аргумента и возвращающую новый новый массив с положительными числами
const array = [-2, 5, -4, 16, 121, -45, 567];

const getArray = array.filter(element => element > 0);
console.log(getArray);

// 3. Написать функцию, которая принимает 5 числовых аргументов и возращает самое большое число из них

function arguments(a, b, c, d, e) {
    return Math.max(a, b, c, d, e);
}
console.log(arguments(2, 6, 355, 4, 1000));

// 4. Написать функцию, которая принимает массив с числами и возращает самое большое число

function maxNumm(arr) {
    return Math.max(...arr);
}
console.log(maxNumm(array));

// 5. Написать функцию, которая принимает два числа и возвращает первое число, возведенное в степень сторого числа

const numbers = (a, b) => a ** b;
console.log(numbers(4, 2));


function numbers1(a, b) {
    return a ** b;
}
console.log(numbers1(4, 2)); 

// 6. Написать функцию, которая принимает два массива и возвращает один массив, созданный из двух переданных

const arr1 = [1, 2, 3, 4, 5];
const arr2 = ["one", "two", "tree", "four", "five"];

function newArr(ar1, ar2) {
    return [...ar1, ...ar2];
}

let newArr1 = newArr(arr1,arr2);
console.log(newArr1);

// 7. Напишите стрелочную функцию, которая принимает массив чисел и возвращает новый массив, содержащий только положительные чётные числа.
const masiv = [-2, 3, -25, 4, -234];

const newArr2 = masiv.filter(element => element > 0);
console.log(newArr2);

// 8. Напишите стрелочную функцию, которая принимает две строки и возвращает самую длинную
let lengtString = (str1, str2) => str1.length > str2.length ? str1 : str2;
console.log(lengtString("text", "text not to read"));

// 9. Напишите стрелочную функцию, которая принимает строку и возвращает её с первой буквой в верхнем регистре.
let text = "hello";
let upperString = (str) => str.charAt(0).toUpperCase() + str.slice(1);
console.log(upperString(text));

