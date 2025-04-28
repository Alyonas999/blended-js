/*Задача 1 

const styles = ['jazz', 'blues'];
styles.push('rock-n-roll');
styles[styles.indexOf('blues')] = 'classic';
function items(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(`${i + 1} - ${array[i]}`);
    }
};
items(styles);*/

/*Завдання 2
 Напишіть функцію checkLogin(array), яка:
// Приймає масив логінів як аргумент.
// Запитує ім'я користувача через prompt.
// Перевіряє, чи є введене ім'я у переданому масиві.
// Якщо ім'я є в масиві – виводить повідомлення через alert: "Welcome, <name>!"
// Якщо ім'я відсутнє – виводить повідомлення: "User not found".
// const logins = ["Peter", "John", "Igor", "Sasha"];

function checkLogin(array) {
    const login = prompt('What is your name?');
if (array.includes(login)) {
        alert(`Welcome, ${login}!`);
    } else {
        alert('User not found');
    }
}
const logins = ["Peter", "John", "Igor", "Sasha"];
checkLogin(logins);*/


/* Завдання 3:
// Напишіть функцію caclculateAverage(), яка приймає довільну кількість аргументів і 
// повертає їхнє середнє значення. Додайте перевірку, що аргументи - це числа.*/

function caclculateAverage(...numbers) {
    let total = 0;
    for (let number of numbers) {
        total += number;
    }
    return numbers.length ? total / numbers.length : 0;
}
console.log(caclculateAverage);
