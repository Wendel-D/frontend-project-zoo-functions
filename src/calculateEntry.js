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
  const entradas = entrants.reduce((acumulador, valorAtual) => {
    if(valorAtual.age < 18){
      acumulador.child++;
    } else if (valorAtual.age >= 50) {
      acumulador.senior++
    }else {
      acumulador.adult++
    }
    return acumulador;
  }, {adult: 0, child: 0, senior: 0})
  return entradas;
}

function calculateEntry(entrants) {
  if ( entrants === undefined || Object.keys(entrants).length === 0 ) {
    return 0;
  }
  const preco = data.prices;
  const { child,  adult, senior }  = countEntrants(entrants);
  const valorTotal = (child * preco.child) + (adult * preco.adult) + (senior * preco.senior);
  return valorTotal;
}

console.log(countEntrants(entrants));
console.log(calculateEntry());

module.exports = { calculateEntry, countEntrants };
