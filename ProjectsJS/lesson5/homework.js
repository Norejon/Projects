// part 1 || - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б ||
//
// let ploshcha = (a, b) => a * b;
// console.log(ploshcha(5, 10));
// part 2 || - створити функцію яка обчислює та повертає площу кола з радіусом r ||
//
// let aera = (r) => r * 3.14;
// console.log(aera(5));
//
// part 3 || - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r ||
//
// let aera = (r, h) => 3.14 * (r * r) * h;
// console.log(aera(3, 5));
//
// part 4 || - створити функцію яка приймає масив та виводить кожен його елемент ||
//
// function funk(arr) {
//     for (let i of arr) {
//         console.log(i);
//     }
// }
//
// funk([2, 'let', 3, 4, true, 5, 1]);
//
// part 5  || - створити функцію яка створює параграф з текстом. Текст задати через аргумент ||
//
// let funk = (text) => document.write(`<p>${text}</p>`);
// funk("Hello");
//
// part 6 || - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий ||
//
// let funk = (text) => document.write(`
// <ul>
// <li>${text}</li>
// <li>${text}</li>
// <li>${text}</li>
// </ul>
// `);
// funk("dorou");
//
//part 7 || - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл) ||
//
// function funk(text, number) {
//     document.write(`<ul>`);
//     for (let i = 0; i < number; i++) {
//         document.write(`<li>${text}</li>`);
//     }
//     document.write(`</ul>`);
// }
//
// funk('dorou', 6);
//
//part 8 || - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список ||
//
// let arr = [2, 'let', 3, 4, true, 5, 1];
//
// function funk(array) {
//     document.write(`<ol>`);
//     for (let i of array) {
//         document.write(`<li>${i}</li>`);
//     }
//     document.write(`</ol>`)
// }
//
// funk(arr);
//
//part 9 || - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок. ||
//
// let arr = [
//     {
//         id: 4,
//         name: 'Pavlo',
//         age: 20
//     },
//     {
//         id: 2,
//         name: 'Anna',
//         age: 21
//     },
//     {
//         id: 5,
//         name: 'Sem',
//         age: 27
//     },
//     {
//         id: 1,
//         name: 'Sasha',
//         age: 19
//     },
//     {
//         id: 3,
//         name: 'Tanya',
//         age: 21
//     }
//
// ];
//
// function funk(array) {
//     for (let i of array) {
//         document.write(`<div>${i.id} ${i.name} ${i.age}</div>`);
//     }
// }
//
// funk(arr);
//
//part 10 || - створити функцію яка повертає найменьше число з масиву ||
//
// let arr = [1, 5, 3, 34, -22];
// let funk = (array) => Math.min(...array);
// console.log(funk(arr));
//
//part 11 || - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13 ||
//
// let arr = [1, 5, 3, 34, -22];
//
// function funk(array) {
//     let sum = 0;
//     for (const i of array) {
//         sum += i;
//     }
//     return sum;
// }
//
// console.log(funk(arr));