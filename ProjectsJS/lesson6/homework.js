//part 1 || - Знайти та вивести довижину настипних стрінгових значень

// let one = 'hello world';
// let two = 'lorem ipsum';
// let three = 'javascript is cool';
// console.log(one.length,two.length,three.length);

//part 2 || - Перевести до великого регістру наступні стрінгові значення

// let one = 'hello world';
// let two = 'lorem ipsum';
// let three = 'javascript is cool';
// one.toUpperCase();
// two.toUpperCase();
// three.toUpperCase();

//part 3 || - Перевести до нижнього регістру настипні стрінгові значення

// let one = 'HELLO WORLD';
// let two = 'LOREM IPSUM';
// let three = 'JAVASCRIPT IS COOL';
// one.toLowerCase();
// two.toLowerCase();
// three.toLowerCase();

//part 4 || - Є "брудна" стрінга . Почистити її від зайвих пробілів.

// let str = ' dirty string   ';
// str.trim();

//part 5 || - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.

// let str = 'Ревуть воли як ясла повні';
// str.split(' ');

//part 6 || - є масив чисел . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

// let arr = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
//
// let newArr = arr.map((obj) => obj.toString());
// console.log(newArr);

//part 7 || - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.

// let nums = [11,21,3];
// let sortNums = nums.sort(function(a,b){
//     // з меншого до більшого
//     if (a<b){
//         return -1;
//     }
//     //з більшого до меншого
//     // if (a>b){
//     //     return -1;
//     // }
// });
// console.log(sortNums);

//part 8 || - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//8.1 ||-- відсортувати його за спаданням за monthDuration

// let sortarr = coursesAndDurationArray.sort(function (a,b){
//  if(a.monthDuration>b.monthDuration){
//      return -1;
//  }
// });
// console.log(sortarr);

//8.2 || -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// let filterarr = coursesAndDurationArray.filter((cours) =>cours.monthDuration>5);
// console.log(filterarr);

//part 9 ||  описати колоду карт
//  - знайти піковий туз
//  - всі шістки
//  - всі червоні карти
//  - всі буби
//  - всі трефи від 9 та більше
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }


// let coloda = [];
// let cardSuit = ['spade', 'diamond', 'heart', 'clubs'];
// let colodatypes = [6, 7, 8, 9, 10, 'jack', 'queen', 'king', 'ace'];
// for (let type of colodatypes) {
//     for (let suit of cardSuit) {
//         if (suit == 'diamond' || suit == 'heart') {
//             coloda.push(new Object({suit: suit, type: type, color: 'red'}));
//         } else if (suit == 'spade' || suit == 'clubs') {
//             coloda.push(new Object({suit: suit, type: type, color: 'black'}));
//         }
//     }
// }
// let jokers = [{color: 'red', type: 'joker'}, {color: 'black', type: 'joker'}];
// for (let j of jokers) {
//     coloda.push(j);
// }
// console.log(coloda);
// console.log(coloda.filter((card) => card.suit == 'spade' && card.type == 'ace'));
// console.log(coloda.filter((card) => card.type == '6'));
// console.log(coloda.filter((card) => card.color == 'red'));
// console.log(coloda.filter((card) => card.suit == 'diamond'));
// console.log(coloda.filter((card) => card.suit == 'clubs' && card.type != 6 && card.type != 7 && card.type != 8));

//part 10 || Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
// let sortColoda = coloda.reduce((colodaPoMastyah, masti) => {
//     if (masti.suit == 'spade') {
//         colodaPoMastyah.spade.push(masti);
//     } else if (masti.suit == 'diamond') {
//         colodaPoMastyah.diamond.push(masti);
//     } else if (masti.suit == 'heart') {
//         colodaPoMastyah.heart.push(masti);
//     } else if (masti.suit == 'clubs') {
//         colodaPoMastyah.clubs.push(masti);
//     }
//     return colodaPoMastyah;
// }, {spade: [], diamond: [], heart: [], clubs: []});
// console.log(sortColoda);