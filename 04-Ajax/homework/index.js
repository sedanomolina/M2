// -----------------------------EXTRACT DATA-----------------------------

const URL_BASE = 'https://m2expressrauldev.up.railway.app/amigos'

const err = err => console.log('Error en la solicitud GET:', err);

const getAjax = (success, endpoint = '', error = err) => $.get(URL_BASE + endpoint).done(success).fail(error);

// ---------------------------------------------------------------------

// -----------------------------EXCERCISE ONE-----------------------------

const botonVerAmigos = document.getElementById('boton');
const ul = document.getElementById('lista');
const img = document.getElementsByTagName('img');
img[0].style.display = 'none';


const successButtonVerAmigos = response => {    // Prevent data from stacking up.
    [...ul.childNodes].forEach(user => ul.removeChild(user));

    // We create the 'li' per user.
    response.forEach(user => ul.appendChild(document.createElement('li')).innerHTML = `${user.id} ${user.name}`);

    img[0].style.display = 'none';
};

const eventButtonVerAmigos = () => {
    img[0].style.display = 'block';
    getAjax(successButtonVerAmigos);
};

botonVerAmigos.addEventListener('click', eventButtonVerAmigos);

// ---------------------------------------------------------------------

// -----------------------------EXCERCISE TWO-----------------------------
// Save value.
let endpoint = ''

// Elements.
const inputId = document.getElementById('input');
const buttonSearch = document.getElementById('search')
const spanAmigo = document.getElementById('amigo');
/* INPUT */
inputId.placeholder = 'Write an ID'
const eventInputId = event => endpoint = event.target.value;//Save value.
inputId.addEventListener('input', eventInputId);// Event INPUT. 

/* BUTTON */
let usersId = [];
const getIds = res => usersId = res.map(user => user.id);
const successButtonSearch = response => {
    spanAmigo.innerHTML = `${response.name} tiene ${response.age} años de edad, y le puedes escribir a su correo: ${response.email}`
    inputId.value = '';
    inputId.placeholder = ` ${usersId.length} ID options `;
};

const returnButtons = (tagSpan, valueinput) => {
    tagSpan.innerHTML = '👀?'
    inputId.value = '';
    let limitOptions = usersId.length;
    setTimeout(() => {
        alert(`\n\t Hola 👋, el ID ${valueinput} no es valido o ya 💀. \n\t Existen registrados ${limitOptions} usuarios 🎈`);
    }, 100);
};
const errorButtonSearch = () => {
    returnButtons(spanAmigo, endpoint);
};


const eventButtonSearch = () => {
    getAjax(getIds);// We update the IDs in the variable 'usersId'
    !endpoint.includes(' ') && endpoint.length !== 0 ? getAjax(successButtonSearch, `/${endpoint}`, errorButtonSearch) : errorButtonSearch();
};
buttonSearch.addEventListener('click', eventButtonSearch);//Event BUTTON.

// ---------------------------------------------------------------------

// -----------------------------EXCERCISE THREE-----------------------------

// // More general variables.

const inputDelete = document.getElementById('inputDelete');
const buttonDelete = document.getElementById('delete');
const spanUserDelete = document.getElementById('success');
inputDelete.placeholder = 'Delete User'

let valueInputDelet = '';
let userToDelet = {};

const getUserToDelet = response => userToDelet = response;

const eventInputDelet = event => {
    valueInputDelet = event.target.value;
    //User to delete in 'userToDelet'
    // We update the IDs in the variable 'usersId'
    if (usersId.includes(Number(event.target.value))) getAjax(getUserToDelet, (`/${valueInputDelet}`));
}

const succesButtonDelete = (res) => {

    getAjax(successButtonVerAmigos); //We reuse code to paint friends.
    spanUserDelete.innerHTML = `😥 Te vamos a extrañar  ${userToDelet.name} 👋`;
    inputDelete.value = '';
    usersId = res.map(user => user.id);
};


const eventDelete = () => {


    if (usersId.includes(Number(valueInputDelet))) {
        spanUserDelete.innerHTML = `A ${userToDelet.name} no por favor!🥺`;
        setTimeout(() => {
            const confirmDelete = confirm(`\n\tEspera! ✋ ✋ ✋ \n\tEl ID: ${valueInputDelet} es de ${userToDelet.name} 🚨 🚨 🚨 \n\t¿Estás seguro de eliminar a ${userToDelet.name}? 😡 😡 😡 `);
            if (confirmDelete) {
                $.ajax({
                    url: `${URL_BASE}/${valueInputDelet}`,
                    type: 'DELETE',
                    success: succesButtonDelete
                    // error property does not work "error:errorButtonDelete"
                });

                inputDelete.value = ''
                setTimeout(() => inputId.placeholder = ` ${usersId.length} ID options`, 100);
            } else {
                spanUserDelete.innerHTML = `😅 Eso estuvo serca para ${userToDelet.name} ufff! 🎉`;
                getAjax(successButtonVerAmigos); //We reuse code to paint friends.
                inputDelete.value = ''
            }
        }, 100);
    } else {
        returnButtons(spanUserDelete, valueInputDelet);
        inputDelete.value = '';
    };
};
inputDelete.addEventListener('input', eventInputDelet);
buttonDelete.addEventListener('click', eventDelete);


// ---------------------------------------------------------------------

// --------------------------EXTRA-POST---------------------------------


const ajaxPost = (friend, success) => {
    $.ajax({
        url: URL_BASE,
        type: 'POST',
        dataType: 'json',
        data: JSON.stringify(friend),
        contentType: 'application/json',
        success,
        error: err => console.log(err)
    });
};


const inputName = document.getElementById('name');
const inputAge = document.getElementById('age');
const inputEmail = document.getElementById('email');
const buttonPost = document.getElementById('post');
const spanPost = document.getElementById('successPost');

inputName.placeholder = 'Write name';
inputAge.placeholder = 'Write age';
inputEmail.placeholder = 'Write email';

inputName.type = 'text';
inputAge.type = 'number';
inputEmail.type = 'email';

const newFriend = {
    name: '',
    age: '',
    email: ''
}
const successPost = (res) => {

    inputName.value = '';
    inputAge.value = '';
    inputEmail.value = '';
    inputId.placeholder = ` ${res.length} ID options`;
    getAjax(successButtonVerAmigos);
    spanPost.innerHTML = 'Tenemos un nuevo amigo 🎉';
    newFriend.age = '';//Prevent old friend's age from loading.
    console.log(newFriend.age);

};
console.log(newFriend.age);

inputName.addEventListener('input', event => newFriend.name = event.target.value);
inputAge.addEventListener('input', event => newFriend.age = event.target.value);
inputEmail.addEventListener('input', event => newFriend.email = event.target.value);
const eventPost = () => {

    if (newFriend.name.length === 0) {
        spanPost.innerHTML = 'Escribe un nombre';
    } else if (newFriend.name.length < 2) {
        spanPost.innerHTML = 'Nombre muy corto';
    } else if (newFriend.name.length > 50) {
        spanPost.innerHTML = 'Nombre muy largo';
    } else if (newFriend.name[0] === ' ') {
        spanPost.innerHTML = 'Sin espacios al inicio, por favor';
    } else if (newFriend.name.split('').filter(character => character !== ' ').length === 0) {
        spanPost.innerHTML = 'Tu nombre es invisible?';
    } else if (newFriend.age.length === 0) {
        spanPost.innerHTML = 'Escribe una edad, por favor';
    } else if (isNaN(newFriend.age)) {
        spanPost.innerHTML = 'Edad deve ser un número';
    } else if (Number(newFriend.age) < 1) {
        spanPost.innerHTML = 'Edad deve ser mayor a cero';
    } else if (Number(newFriend.age) > 109) {
        spanPost.innerHTML = 'Edad deve ser menor a ciento diez';
    } else if (newFriend.email.length === 0) {
        spanPost.innerHTML = 'Escribe un correo';
    } else if (!newFriend.email.includes('@')) {
        spanPost.innerHTML = 'Deve incluir un arroba @';
    } else if (!newFriend.email.split('@')[1].includes('.')) {
        spanPost.innerHTML = 'Deve tener un punto';
    } else if (!newFriend.email.split('@')[1].includes('.com')) {
        spanPost.innerHTML = 'Deve terminar en .com';
    } else if (newFriend.email.split('@')[1].split('.')[0].length === 0) {
        spanPost.innerHTML = 'Ejemplito example@henry.com';
    } else if (newFriend.email.includes(' ')) {
        spanPost.innerHTML = 'Sin espacios por favor';
    } else {
        ajaxPost(newFriend, successPost)
    }


};

buttonPost.addEventListener('click', eventPost);

// ---------------------------------------------------------------------
