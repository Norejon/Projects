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
            let commentDiv = document.createElement('div');
            commentDiv.setAttribute('class','commentDiv');
            for (let comment of comments){
                let div = document.createElement('div');
                let name = document.createElement('h3');
                let email = document.createElement('p');
                let p = document.createElement('p');
                div.setAttribute('class','user');
                name.append(comment.name);
                email.append(comment.email);
                p.append(comment.body);
                div.append(name,email,p);
                commentDiv.append(div);
            }
            document.body.append(commentDiv);

        }, 200);
    })