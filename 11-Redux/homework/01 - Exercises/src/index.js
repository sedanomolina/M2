const { createStore } = require("redux");
const contador = require("./reducer");
const { incremento, decremento, incremento_impar } = require("./actions");

// En esta línea creamos nuestro store. Pasándole como parámetro nuestro Reducer
var store = createStore(contador);

// Obtenemos el elemento con el id `valor`.
var valor = document.getElementById('valor');


// Esta función nos va a servir para actualizar nuestro DOM con el valor que tengamos en nuestro Store.
// En el primer render y cada vez que nos subscribamos al Store.
// Utilizamos el elemento obtenido arriba para mostrar el State.
function renderContador() {
  // Obtenemos la propiedad 'contador' de nuestro store:
  // Seteamos el número obtenido como texto dentro del elemento con id 'valor':
  const { count } = store.getState();
  valor.innerHTML = count;

}
// Ejecutamos la función 'renderContador':
renderContador()

// Nos subscribimos al store pasándole la misma función. Así cada vez que llegue una acción, ejecutamos la función:
store.subscribe(renderContador)

// Por último, utilizamos los botones de nuestro HTML para que cada vez que hagamos click,
// hagan un dispatch al store de la acción correspondiente:
var buttonIncremento = document.getElementById('incremento');
var buttonDecremento = document.getElementById('decremento');
var buttonIncrementoImpar = document.getElementById('incrementoImpar');
var buttonIncrementoAsync = document.getElementById('incrementoAsync');

const handleClickInc = () => store.dispatch(incremento(1))
const handleClickDec = () => store.dispatch(decremento(1))
const handleClickIncrementImp = () => store.dispatch(incremento_impar())
const handleClickIncrementAsync = () => setTimeout(() => store.dispatch(incremento(1)), 1000);


buttonIncremento.addEventListener('click', handleClickInc);
buttonDecremento.addEventListener('click', handleClickDec);
buttonIncrementoImpar.addEventListener('click', handleClickIncrementImp);
buttonIncrementoAsync.addEventListener('click', handleClickIncrementAsync);

