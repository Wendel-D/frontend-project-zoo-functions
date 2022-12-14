const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const specie = species.find((elemento) => elemento.name === animal);
  return specie.residents.every((idade) => idade.age >= age);
}

module.exports = getAnimalsOlderThan;
