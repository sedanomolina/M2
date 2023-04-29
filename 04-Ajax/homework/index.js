// -----------------------------EXTRACT DATA-----------------------------

const URL_BASE = 'http://localhost:5000/amigos'

const error1 = err => console.error('Error en la solicitud GET:', err);

const getAjax = (success, endpoint = '', error) => $.get(URL_BASE + endpoint).done(success).fail(error);

// ---------------------------------------------------------------------

// -----------------------------EXCERCISE ONE-----------------------------

const botonVerAmigos = document.getElementById('boton');
const ul = document.getElementById('lista');
const img = document.getElementsByTagName('img');
img[0].style.display = 'none';


const successButtonVerAmigos = response => {    // Prevent data from stacking up.
    [...ul.childNodes].forEach(user => ul.removeChild(user));

    // We create the 'li' per user.
    response.forEach(user => ul.appendChild(document.createElement('li')).innerHTML = user.name);

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
    spanAmigo.innerHTML = response.name;
    inputId.value = '';
    inputId.placeholder = `ID options 1 to ${usersId.length}`;
};

const errorButtonSearch = () => {
    spanAmigo.innerHTML = '👀?'
    inputId.value = '';
    let limitOptions = usersId.length;
    setTimeout(() => {
        alert(`\n\t Hello 👋, only numbers please. \n\t I inform you that there are only ${limitOptions} users 🎈`);
    }, 100);
}


const eventButtonSearch = () => {

    getAjax(getIds);// We update the IDs in the variable 'usersId'
    getAjax(successButtonSearch, '/' + endpoint, errorButtonSearch);
};
buttonSearch.addEventListener('click', eventButtonSearch);//Event BUTTON.

// ---------------------------------------------------------------------

// -----------------------------EXCERCISE THREE-----------------------------

// // More general variables.

const inputDelete = document.getElementById('inputDelete');
const buttonDelete = document.getElementById('delete');
const spanUserDelete = document.getElementById('success');

// // Config Ajax delet user.

let idToDelet = '';
let userToDelet = {};
const getUserToDelet = response => userToDelet = response;
const eventInputDelet = event => {
    idToDelet = event.target.value;
    //User to delete in 'userToDelet'
    // We update the IDs in the variable 'usersId'
    getAjax(getUserToDelet, (`/${idToDelet}`)) && getAjax(getIds);
}

const succesButtonDelete = () => {

    getAjax(successButtonVerAmigos); //We reuse code to paint friends.
    spanUserDelete.innerHTML = `😥 Te vamos a extrañar  ${userToDelet.name} 👋`
    inputDelete.value = '';
};

const errorButtonDelete = () => {

    spanUserDelete.innerHTML = '👀?'
    inputDelete.addEventListener('input', eventInputDelet);
    let limitOptions = usersId.length;
    setTimeout(() => {
        alert(`\n\t Hello 👋, only numbers please. \n\t I inform you that there are only ${limitOptions} users 🎈`);
    }, 100);
};

const eventDelete = () => {

    spanUserDelete.innerHTML = `${userToDelet.name} says: no please!🥺`
    setTimeout(() => {
        const confirmDelete = confirm(`\n\tEspera!\n\t¿estás seguro de eliminar a ${userToDelet.name}?`)
        if (confirmDelete) {
            if (usersId.includes(Number(idToDelet))) {

                $.ajax({
                    url: `${URL_BASE}/${idToDelet}`,
                    type: 'DELETE',
                    success: succesButtonDelete
                    // error property does not work "error:errorButtonDelete"
                });
            } else {
                errorButtonDelete()
            };
        } else {
            spanUserDelete.innerHTML = `😅 Eso estuvo serca para ${userToDelet.name} ufff! 🎉`
            getAjax(successButtonVerAmigos); //We reuse code to paint friends.
        }
    }, 100);
};
inputDelete.addEventListener('input', eventInputDelet)
buttonDelete.addEventListener('click', eventDelete);

// ---------------------------------------------------------------------