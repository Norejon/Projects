fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        for (let i = 0; i < users.length; i++) {
            let maindiv = document.createElement('div');
            maindiv.setAttribute('class', 'mainBlock');
            for (let o = 0; o < 2; o++) {
                let div = document.createElement('div');
                div.setAttribute('class', 'user');
                let a = document.createElement('a');
                a.setAttribute('class', 'linkA');
                a.innerText = 'деталі...';
                if (o == 0) {
                    div.append(`${users[i].id} - ${users[i].name}  `);
                    a.href = `user-details.html?id=${users[i].id}`;
                }
                if (o == 1) {
                    div.append(`${users[i + 1].id} - ${users[i + 1].name}  `);
                    a.href = `user-details.html?id=${users[i + 1].id}`;
                }
                div.append(a);
                maindiv.append(div);
            }
            i++;

            document.body.append(maindiv);
        }
    });
