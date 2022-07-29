const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

function countAnimals(animal) {
  if (!animal) {
    const animais = species.reduce((acc, currentValue) => {
      acc[currentValue.name] = currentValue.residents.length;
      return acc;
    }, {});
    return animais;
  } if (animal.sex === undefined) {
    const animais = species.find((elemento) => elemento.name === animal.specie);
    const animaisQt = animais.residents.length;
    return animaisQt;
  }
  const animais = species.find((elemento) => elemento.name === animal.specie);
  return animais.residents.filter((elemento) => elemento.sex === animal.sex).length;
}

console.log(countAnimals({ specie: 'giraffes', sex: 'female' }));
module.exports = countAnimals;
