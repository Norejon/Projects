let url = new URL(location.href);
let ids = url.searchParams.get('id');
let id = ids-1;

fetch('http://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
            let div = document.createElement('div');
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
            `
        div.style.fontSize = '20px';
            document.body.appendChild(div);

    });