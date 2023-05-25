const { INCREMENTO, DECREMENTO, INCREMENTO_IMPAR, INCREMENTO_ASYNC } = require('../action-types');

// Nuestras actions (action creators) devolverán un paquete de actions que nuestro reducer recibirá. 
// ¿Cómo es el paquete de acción? Tengan en cuenta que el creador de la acción no es en absoluto responsable 
// de manejar ninguna de las lógicas actuales de actualización del store central de Redux.
// Eso se lo deja al reducer(s).

const incremento = (num) => {
  return {
    type: INCREMENTO,
    payload: num
  }
};

const decremento = (num) => {
  return {
    type: DECREMENTO,
    payload: num
  }
};
const incremento_impar = () => {
  return {
    type: INCREMENTO_IMPAR,
    payload: {
      isPair: 1,
      isUnPaired: 2
    }
  }
};

const incrementoAsync = () => {
  return {
    type: INCREMENTO_ASYNC,
    payload: null
  }
}

module.exports = {
  incremento,
  decremento,
  incremento_impar,
  incrementoAsync
}