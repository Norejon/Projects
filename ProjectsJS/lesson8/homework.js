//part 1 || - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

// function User(id,name,surname,email,phone){
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
// let users = [
//     new User(7,"Anton","Shewchenko","antonshewchenko@gmail.com",228339),
//     new User(6,"Denis","Shnobel","denisshnobel@gmail.com",321312),
//     new User(2,"Anna","Iriska","irishkaanna@gmail.com",245623423),
//     new User(9,"Svyatoslaw","Witrowskiy","svyatikwiter@gmail.com",12312),
//     new User(0,"Maryana","Korinovich","korinistyny@gmail.com",32423),
//     new User(5,"Mykola","Svitlytskiy","svitlonebes@gmail.com",14887),
//     new User(1,"Nadya","Lichtenbraunshteymak","oyvsyo@gmail.com",765454),
//     new User(4,"Yaroslaw","Dubko","yaroslavdubb@gmail.com",12311),
//     new User(8,"Lyudmyla","Krylata","krylaangela@gmail.com",213123),
//     new User(3,"Myroslava","Chmelnytska","chmelnitskamyroslava@gmail.com", 85674)
// ];
// console.log(users);

//part 2 || - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
//
// console.log(users.filter(value => value.id%2==0));
//
//part 3 || - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
//
// console.log(users.sort(function (a, b){
//     if (a.id<b.id){
//         return -1;
//     }
// }));

//part 3 || - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

// function Client(id,name,surname,email,phone,order){
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
//     this.order = order;
// }
//
// let clients = [
//     new Client(7,"Anton","Shewchenko","antonshewchenko@gmail.com",228339,['kanabis','pizza']),
//     new Client(6,"Denis","Shnobel","denisshnobel@gmail.com",321312,['pivo','horilka','kalmari']),
//     new Client(2,"Anna","Iriska","irishkaanna@gmail.com",245623423,['telefoni']),
//     new Client(9,"Svyatoslaw","Witrowskiy","svyatikwiter@gmail.com",12312,['kokos','abrikos']),
//     new Client(0,"Maryana","Korinovich","korinistyny@gmail.com",32423,['shapka','rukavitsi','noski','kurtki','shtani','svetry']),
//     new Client(5,"Mykola","Svitlytskiy","svitlonebes@gmail.com",14887,['powerbank','generator','stabilizator','invector']),
//     new Client(1,"Nadya","Lichtenbraunshteymak","oyvsyo@gmail.com",765454,['nij','terka','ruchka','golki']),
//     new Client(4,"Yaroslaw","Dubko","yaroslavdubb@gmail.com",12311,['drowa']),
//     new Client(8,"Lyudmyla","Krylata","krylaangela@gmail.com",213123,['kwity','wazonki','derewa']),
//     new Client(3,"Myroslava","Chmelnytska","chmelnitskamyroslava@gmail.com", 85674,['liki','tyskomir','bynt','vitaminy'])
// ];
//
// console.log(clients.sort( function (a, b){
//     if (a.order.length<b.order.length){
//         return -1;
//     }
// }));

//part 4 || - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//     -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// function Car(model, madeBy, year, maxSpeed, volumeDviguna) {
//     this.model = model;
//     this.madeBy = madeBy;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.volumeDviguna = volumeDviguna;
//
//     this.drive = function () {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed}`);
//     }
//     this.info = function () {
//         console.log('model - ' + this.model);
//         console.log('made by - ' + this.madeBy);
//         console.log('year - ' + this.year);
//         console.log('max speed - ' + this.maxSpeed);
//         console.log('volume of dvigun - ' + this.volumeDviguna);
//     }
//     this.increaseMaxSpeed = function (newSpeed) {
//         this.maxSpeed = newSpeed;
//     }
//     this.changeYear = function (newValue) {
//         this.year = newValue;
//     }
//     this.addDriver = function (driver) {
//         this.driver = driver = {name: driver.name, age: driver.age};
//     }
// }
//
// let car1 = new Car('Chewrolet Evanda', 'GeneralMotors', 2006, 240, 2);
//
// car1.drive();
// car1.info();
// car1.increaseMaxSpeed(320);
// car1.changeYear(2018);
//
// let driver1 = {name: 'Daniel', age: 21};
// car1.addDriver(driver1);
// console.log(car1);

//part 5 || - (Те саме, тільки через клас)

// class Car{
//     constructor(model, madeBy, year, maxSpeed, volumeDviguna) {
//         this.model = model;
//         this.madeBy = madeBy;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.volumeDviguna = volumeDviguna;
//     }
//     drive(){
//         console.log(`їдемо зі швидкістю ${this.maxSpeed}`);
//     }
//     info() {
//         console.log('model - ' + this.model);
//         console.log('made by - ' + this.madeBy);
//         console.log('year - ' + this.year);
//         console.log('max speed - ' + this.maxSpeed);
//         console.log('volume of dvigun - ' + this.volumeDviguna);
//     }
//     increaseMaxSpeed(newSpeed) {
//         this.maxSpeed = newSpeed;
//     }
//     changeYear(newValue) {
//         this.year = newValue;
//     }
//     addDriver(driver) {
//         this.driver = driver = {name: driver.name, age: driver.age};
//     }
// }
// let car2 = new Car('Chewrolet Evanda', 'GeneralMotors', 2006, 240, 2);
//
// car2.drive();
// car2.info();
// car2.increaseMaxSpeed(320);
// car2.changeYear(2018);
//
// let driver1 = {name: 'Michelle', age: 19};
// car2.addDriver(driver1);
// console.log(car2);


//part 6 ||-створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// За допомоги циклу знайти яка попелюшка повинна бути з принцом.
// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

// class Popelyushka {
//     constructor(name, age, footSize) {
//         this.name = name;
//         this.age = age;
//         this.footSize = footSize;
//     }
// }
//
// let popelyushki = [
//     new Popelyushka('Anna', 21, 37),
//     new Popelyushka('Maria', 23, 40),
//     new Popelyushka('Zoryana', 18, 39),
//     new Popelyushka('Olha', 20, 35),
//     new Popelyushka('Ewa', 24, 38),
//     new Popelyushka('Svitlana', 27, 36),
//     new Popelyushka('Nadya', 18, 39),
//     new Popelyushka('Marta', 22, 41),
//     new Popelyushka('Lyudmyla', 26, 37),
//     new Popelyushka('Katya', 29, 36),
// ];
// let prince = {name: 'Mykola', age: 22, footHeFound: 38};
//
// for (chosenone of popelyushki) {
//     if (chosenone.footSize == prince.footHeFound) {
//         console.log(`Prince ${prince.name} found his princes, it was popelyushka ${chosenone.name}`);
//     }
// }
// function chosenOne(popelyushka){
//     if (popelyushka.footSize == prince.footHeFound){
//         return popelyushka;
//     }
// };
// console.log(popelyushki.find(chosenOne));