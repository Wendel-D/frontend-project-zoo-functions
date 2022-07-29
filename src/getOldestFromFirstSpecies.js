const data = require('../data/zoo_data');
const { employees } = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const colab = employees.find((elemento) => elemento.id === id);
  const firstSpecie = species.find((elemento) => elemento.id === colab.responsibleFor[0]);
  const oldestAnimal = firstSpecie.residents.sort((a, b) => b.age - a.age);
  return Object.values(oldestAnimal[0]);
}
console.log(getOldestFromFirstSpecies('56d43ba3-a5a7-40f6-8dd7-cbb05082383f'));
module.exports = getOldestFromFirstSpecies;
