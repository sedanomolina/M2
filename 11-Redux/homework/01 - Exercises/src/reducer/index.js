const { INCREMENTO, DECREMENTO, INCREMENTO_IMPAR, INCREMENTO_ASYNC } = require('../action-types');

const initialState = {
  count: 0
}

// Nuestro reducer que maneja nuestros dos casos de acción incremento y decremento.
// Recibe el estado de nuestro store, junto con una action creada por nuestro action creator. 
// ¿Qué tiene que hacer el reducer con el contador de cada caso?

function contador(state = initialState, action) {

  switch (action.type) {
    case INCREMENTO:

      return {
        ...state, count: state.count + action.payload
      }
    case DECREMENTO:
      return {
        ...state, count: state.count - action.payload
      }
    case INCREMENTO_IMPAR:
      return state.count % 2 === 0
        ? { ...state, count: state.count + action.payload.isPair }
        : { ...state, count: state.count + action.payload.isUnPaired }
    case INCREMENTO_ASYNC:
      return {
        
      }
    default:
      return { ...state };
  }

};

module.exports = contador;