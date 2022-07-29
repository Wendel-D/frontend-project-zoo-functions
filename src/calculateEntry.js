const data = require('../data/zoo_data');
const { name } = require('faker/locale/pt_BR'); // APAGAR DEPOIS

const entrants = [
  { name: name.findName(), age: 5 },
  { name: name.findName(), age: 5 },
  { name: name.findName(), age: 5 },
  { name: name.findName(), age: 18 },
  { name: name.findName(), age: 18 },
  { name: name.findName(), age: 50 },
];

function countEntrants(entrants) {
  entrants.reduce((acumulador, valorAtual) => {
    ['adult'] = valorAtual.age;
    return ;
  }, {})
}

// function calculateEntry(entrants) {
  
// }

console.log(countEntrants(entrants));
// module.exports = { calculateEntry, countEntrants };
