fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        let maindiv = document.createElement('div');
        maindiv.setAttribute('class', 'mainBlock');
        for (let user of users){
            let div = document.createElement('div');
            div.setAttribute('class', 'user');
            let a = document.createElement('a');
            a.setAttribute('class', 'linkA');
            a.href = `user-details.html?id=${user.id}`;
            a.innerText = 'Деталі...';
            div.append(`${user.id} - ${user.name} `,a);
            maindiv.append(div);
            document.body.append(maindiv);
        }

    });
