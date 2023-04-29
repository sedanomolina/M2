var traverseDomAndCollectElements = function (matchFunc, startEl) {
  var resultSet = [];

  if (typeof startEl === "undefined") {
    startEl = document.body;
  }

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍ
  let valuematchFunc = matchFunc(startEl);

  if (valuematchFunc) resultSet = [...resultSet, startEl];

  [...startEl.children].forEach(child => {
    let match = traverseDomAndCollectElements(matchFunc, child);
    resultSet = [...resultSet, ...match];
  })

  return resultSet;

};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag


var selectorTypeMatcher = function (selector) { //'div > img'
  // tu código aquí:
  if (selector[0] === '#') return 'id';
  if (selector[0] === '.') return 'class';
  if (selector.includes('.')) return 'tag.class';
  if (selector.includes('>')) return 'tag > tag';//<-------------------EXTRA---------------------<
  if (selector.includes(' ')) return 'tag tag';//<-------------------EXTRA---------------------<
  return 'tag';
};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function (selector) {
  var selectorType = selectorTypeMatcher(selector);
  var matchFunction;

  if (selectorType === "id") matchFunction = element => element.id === selector.slice(1);

  if (selectorType === "class") matchFunction = element => element.classList.contains(selector.slice(1))

  if (selectorType === "tag") matchFunction = element => element.localName === selector;

  if (selectorType === "tag.class") matchFunction = element => {

    let [tagName, className] = selector.split('.')
    return matchFunctionMaker(tagName)(element) && matchFunctionMaker('.' + className)(element);
  };

  //I-------------------EXTRA-1--------------------I

  if (selectorType === "tag > tag") matchFunction = element => {

    let [tagName1, tagName2] = selector.split(' > ');

    if (element.localName === tagName2 && element.parentNode.localName === tagName1) return true
  }
  //I-------------------EXTRA-2--------------------I
  if (selectorType === "tag tag") matchFunction = element => {

    let [tagName1, tagName2] = selector.split(' ');

    if (element.localName === tagName2 && element.closest(tagName1)) return true;
  }
  // I------------------------------------------------I

  return matchFunction;
};

var $ = function (selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};
