//Задание 1

const arr = ["apple", "pear", "watermelon", "orange", "banana"];

let elem = (array, element) => arr[element];
console.log(elem(arr, 1)); //pear

//Задание 2

function weather(kod, funk) {
    return "Сегодня ожидается: " + funk(kod);
    ;
}

function decode(a) {
    let code;
    switch(a) {

        case "SQ":
            code = "шквал";
            break;
        
        case "PO":
            code = "пыльный вихрь";
            break;
         
        case "FC":
            code = "торнадо";
            break;
         
        case "BR":
            code = "дымка (видимость от 1 до 9 км)";
            break;

        case "HZ":
            code = "мгла (видимость менее 10 км)";
            break;
            
        case "FU":
            code = "дым (видимость менее 10 км)";
            break;

        case "DS":
            code = "пыльная буря (видимость менее 10 км)";
            break;

        case "SS":
            code = "песчаная буря (видимость менее 10 км)";
            break;

        default:
            code = "Вы ввели неккоректные данные";
            break; 

    }
    return code;
}

console.log(weather("DS", decode));


///Циклы
// // 1. Вывести в консоль все числа от 0 до 20
// for(let i = 0; i <= 20; i++) {
    // console.log(i); 
// }

// // 2. Вывести в консоль каждое третье число от 15 до 96
// for(let i = 15; i < 96; i += 3) {
    // console.log(i);
    // 
// }

// // 3. Вывести в консоль каждое третье число от 96 до 15
// for(let i = 96; i >= 15; i-=3) {
    // console.log(i);
// }

// // 4. Вывести в консоль каждое число от 100 до 57
// for(let i = 100; i >= 57; i--) {
    // console.log(i);
// }
// 
// 

const numbers = [6, 7, 1, -10, 78, 18, -5, -38, 9];
// // 2. Сформировать новый массив, в который попадут все числа из массива numbers умноженные на 2
const newNumbers = numbers.map(number => number * 2);
console.log(newNumbers);

// // 3. Сформировать новый массив, в который попадут все положительные числа из массива numbers деленные на 2
const numbers1 = numbers.map(number => number / 2);
console.log(numbers1);

// Создаем массивы с именами и возрастами
let names = ["Семен", "Иван", "Петр", "Татьяна"];
let ages = [18, 27, 74, 34];

let combinedArray = [];
for (let i = 0; i < names.length; i++) {
    combinedArray.push(names[i]);
}

for (let i = 0; i < ages.length; i++) {
    combinedArray.push(ages[i]);
}
console.log(combinedArray);

let originalArray = [1, 2, 3, 4, 5]; 
// Используем метод reverse() для обращения порядка элементов в массиве
originalArray.reverse();
console.log(originalArray);


