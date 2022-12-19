//part 1 ||зробити файл users.html
// з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів
// вивести їх id + name списком та додати посилання з href = user-details.html?id=XXX (замість ХХХ - айді юзера)
// при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача (всі 15 полів)
// отримана через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX   ХХХ - айді користувача)

fetch('http://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users =>{
        console.log(users);
        let ul = document.createElement('ul');
        for (let user of users){
            let li = document.createElement('li');
            let a = document.createElement('a');
            a.innerText = `${user.id} ${user.name}`;
            a.href = `users.html?id=${user.id}`
            li.appendChild(a);
            ul.append(li);
        }
        document.body.appendChild(ul);
    });
