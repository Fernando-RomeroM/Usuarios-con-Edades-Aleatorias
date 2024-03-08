//*  USUARIOS */


const bret = {
    nombre: 'Leanne Graham',
    edad: 33,
    username: 'Bret',
    telefono: '1-770-736-8031 x56442',
    email: 'Sincere@april.biz',
}

console.log(bret); 


/* NUEVO CÓDIGO JAVASCRIPT */



const API_URL = 'https://jsonplaceholder.typicode.com/';

const HTMLResponse = document.querySelector(".fichass");
const tpl = document.createDocumentFragment();


fetch(`${API_URL}/users`)
    .then((response) => response.json())
    .then((users) => {
     const tpl = users.map((user) => `<li>${user.name} ${user.username} ${user.email} ${user.phone}</li>`);
     HTMLResponse.innerHTML = `<ul>${tpl}</ul>`;
});




   // const tpl = users.map(user => `<li>${user.name} ${user.email}</li>`)