let url = new URL(location.href);
let ids = url.searchParams.get('id');
let id = ids + 1;
let ix = url.searchParams.get('ix');

fetch(`https://jsonplaceholder.typicode.com/users/${ids}/posts`)
    .then(response => response.json())
    .then(posts => {
        let res = posts.filter(post => post.id == ix);
        let div = document.createElement('div');
        let h1 = document.createElement('h1');
        let p = document.createElement('p');
        h1.innerText = res[0].title;
        p.innerText = res[0].body;
        div.append(h1, p);
        document.body.append(div);
    })
fetch(`https://jsonplaceholder.typicode.com/posts/${ids}/comments`)
    .then(response => response.json())
    .then(comments => {
        setTimeout(() => {
            for (let i = 0; i < comments.length / 4; i++) {
                let bigDiv = document.createElement('div');
                bigDiv.setAttribute('class', 'divBlock');
                for (let o = 0; o < 4; o++) {
                    if (o == 0) {
                        let div = document.createElement('div');
                        let name = document.createElement('h3');
                        let email = document.createElement('p');
                        let p = document.createElement('p');
                        name.append(comments[i + 0].name);
                        email.append(comments[i + 0].email);
                        p.append(comments[i + 0].body);
                        div.append(name,email,p);
                        bigDiv.append(div);
                        o++;
                    }
                    if (o == 1) {
                        let div = document.createElement('div');
                        let name = document.createElement('h3');
                        let email = document.createElement('p');
                        let p = document.createElement('p');
                        name.append(comments[i + 1].name);
                        email.append(comments[i + 1].email);
                        p.append(comments[i + 1].body);
                        div.append(name,email,p);
                        bigDiv.append(div);
                        o++;
                    }
                    if (o == 2) {
                        let div = document.createElement('div');
                        let name = document.createElement('h3');
                        let email = document.createElement('p');
                        let p = document.createElement('p');
                        name.append(comments[i + 2].name);
                        email.append(comments[i + 2].email);
                        p.append(comments[i + 2].body);
                        div.append(name,email,p);
                        bigDiv.append(div);
                        o++;
                    }
                    if (o == 3) {
                        let div = document.createElement('div');
                        let name = document.createElement('h3');
                        let email = document.createElement('p');
                        let p = document.createElement('p');
                        name.append(comments[i + 3].name);
                        email.append(comments[i + 3].email);
                        p.append(comments[i + 3].body);
                        div.append(name,email,p);
                        bigDiv.append(div);
                        o++;
                    }
                }
                document.body.append(bigDiv);

            }
        }, 200);
    })