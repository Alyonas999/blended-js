// Задача 1

// Запропонуйте користувачу ввести число за допомогою prompt().
// Збережіть введене значення у змінну number.
// Перевірте, чи дорівнює змінна number числу 10:
// Якщо так – виведіть повідомлення 'Вірно' у alert().
// Якщо ні – виведіть 'Невірно'. 
// Підказка: prompt завжди повертає рядок (String), тому перед перевіркою  
// перетворіть значення на число за допомогою Number().

// const number = prompt("Ведіть число");
// if (Number(number) === 10) {
//   alert("Вірно");
// } else {
//   alert("Невірно");
// }
// console.log("number: ", number);

// Задача 2
// У змінній min лежить випадкове число від 0 до 59.
// Визначте, в яку чверть години потрапляє
// це число (у першу, другу, третю чи четверту).
// Виведіть в alert відповідне повідомлення, наприклад:
// "10 входить в першу чверть"
// const min = Math.floor(Math.random() * (59 - 0) + 0);

// function findNumber(min) {
//     if (min >= 0 && min < 15) {
//         alert(`${min} Перша чверть`);
//     } else if (min >= 15 && min < 30) {
//         alert(`${min} Друга чверть`);
//     }else if (min >= 30 && min < 45) {
//         alert(`${min} Третя чверть`);
//     }else if (min >= 45 && min <= 59) {
//         alert(`${min} Четверта чверть`);
//     } else {
//         alert("Неправильне число");
//     }
// }
// const min = Number(prompt("Введіть число від 0 до 59"));
// findNumber(min);

// Задача 3
// Змінна num може набувати 4 значення: '1', '2', '3' або '4' 
// (запитуй це значення у користувача через prompt). 
// Якщо вона має значення '1', то у змінну result запишіть 'зима',
// якщо має значення '2' - 'весна' і так далі.
// Розв'яжіть завдання через switch-case.
// Не забудьте про дефолтне значення, на випадок, якщо користувач 
// введе в prompt щось інше. В такому випадку result має набувати значення:
// "Вибачте, але ви маєте ввести значення від 1 до 4 включно".
// Значення змінної result виведіть в консоль.

// function getSeasons(num) {
//     let result;
//     switch (num) {
//         case "1":
//             result = "зима";
//             break;
        
//         case "2":
//             result = "весна";
//             break;
        
//         case "3":
//             result = "літо";
//             break;
        
//         case "4":
//             result = "осінь";
//             break;
//         default:
//             result = "Введить число";
//     }
//     return result;
// }


// Задача 4
// Отримуйте від користувача число (кількість хвилин) через prompt
// і виводьте у консоль рядок у форматі годин та хвилин.
// Приклад: користувач вводить в prompt '70' -> в консолі відобразиться '01:10'.
// Корисне посилання для відображення годин та хвилин у потрібному форматі ('01' замість '1'): 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart#examples

// function clock (minute) {
//     const hours = Math.floor(minute / 60);
//     const min = minute % 60;
//     const corectHours = String(hours).padStart(2, "0");
//     const corectMinute = String(min).padStart(2, "0");
//     return `${corectHours}= ${corectMinute}`;
// }


// Задача 7
// Напишіть функцію getNumbers(min, max), що приймає 2 параметри - 
// мінімальне і максимальне число відповідно.
// Напишіть цикл всередині функції, який виводить у консоль
// всі числа від max до min за спаданням.
// Окрім цього, підрахуйте суму всіх парних чисел в цьому циклі
// і поверніть її з функції.


// function getNumbers(min, max) {
//     let sum = 0;
//     for (let i = max; i >= min; i--){
//         console.log(i);

//         if (i % 2 === 0) {
//             sum += i;
//         }
//     }
//     return sum;
// }
// console.log (getNumbers);




// задача 8
// Напишіть функцію min(a, b), яка приймає 2 числа і повертає меньше з них.
// Потрібно додати перевірку, що функція отримує саме числа, в іншому випадку
// повертати з функції рядок - 'Not a number!'.

// function min(a, b) {
//   if (typeof a !== "number" || typeof b !== "number") {
//     return "Not a number!";
//   }
//   return a > b ? b : a;
// }

// (return Math.min(a, b);)