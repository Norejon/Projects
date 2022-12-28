let url = new URL(location.href);
let ids = url.searchParams.get('id');
let id = ids - 1;

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        let div = document.createElement('div');
        div.setAttribute('class','user');
        div.innerText = `
           Id: ${users[id].id}
           Name: ${users[id].name}
           Username: ${users[id].username}
           Email: ${users[id].email}
           Phone: ${users[id].phone}
           Web site: ${users[id].website}
           Company:
           name: ${users[id].company.name}
           catch phrase: ${users[id].company.catchPhrase}
           bs: ${users[id].company.bs}
           Address:
           city: ${users[id].address.city}
           street: ${users[id].address.street}
           suite: ${users[id].address.suite}
           zipcode: ${users[id].address.zipcode}
           Geo:
           x: ${users[id].address.geo.lat}
           y: ${users[id].address.geo.lng}
            `;
        forbutton.append(button);
        document.body.append(div, forbutton);
    })
let forbutton = document.createElement('div');
forbutton.setAttribute('class', 'forbutton');
let button = document.createElement('button');
button.setAttribute('class', 'buttonPost');
button.innerText = 'post of current user';
button.onclick = function () {
    fetch(`https://jsonplaceholder.typicode.com/users/${id + 1}/posts`)
        .then(response => response.json())
        .then(posts => {
            for (let i = 0; i < posts.length / 5; i++) {
                let divblock = document.createElement('div');
                divblock.setAttribute('class', 'divBlock')
                for (let o = 0; o < 5; o++) {
                    if (o == 0) {
                        let div = document.createElement('div');
                        let a = document.createElement('a');
                        a.innerText = 'деталі...'
                        a.href = `post-details.html?id=${posts[i].userId}&&ix=${posts[i].id}`
                        div.append(`${posts[i].title}  `);
                        div.appendChild(a);
                        divblock.append(div);
                        o++;
                    }
                    if (o == 1) {
                        let div = document.createElement('div');
                        let a = document.createElement('a');
                        a.innerText = 'деталі...'
                        a.href = `post-details.html?id=${posts[i].userId}&&ix=${posts[i].id}`
                        div.append(`${posts[i + 1].title}  `);
                        div.appendChild(a);
                        divblock.append(div);
                        o++;
                    }
                    if (o == 2) {
                        let div = document.createElement('div');
                        let a = document.createElement('a');
                        a.innerText = 'деталі...'
                        a.href = `post-details.html?id=${posts[i].userId}&&ix=${posts[i].id}`
                        div.append(`${posts[i + 2].title}  `);
                        div.appendChild(a);
                        divblock.append(div);
                        o++;
                    }
                    if (o == 3) {
                        let div = document.createElement('div');
                        let a = document.createElement('a');
                        a.innerText = 'деталі...'
                        a.href = `post-details.html?id=${posts[i].userId}&&ix=${posts[i].id}`
                        div.append(`${posts[i + 3].title}  `);
                        div.appendChild(a);
                        divblock.append(div);
                        o++;
                    }
                    if (o == 4) {
                        let div = document.createElement('div');
                        let a = document.createElement('a');
                        a.innerText = 'деталі...'
                        a.href = `post-details.html?id=${posts[i].userId}&&ix=${posts[i].id}`
                        div.append(`${posts[i + 4].title}  `);
                        div.appendChild(a);
                        divblock.append(div);
                        o++;
                    }
                }

                document.body.append(divblock);

            }
        })
}