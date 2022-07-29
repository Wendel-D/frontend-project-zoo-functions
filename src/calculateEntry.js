const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const entradas = entrants.reduce((acc, valorAtual) => {
    if (valorAtual.age < 18) {
      acc.child += 1;
    } else if (valorAtual.age >= 50) {
      acc.senior += 1;
    } else {
      acc.adult += 1;
    }
    return acc;
  }, { adult: 0, child: 0, senior: 0 });
  return entradas;
}

function calculateEntry(entrants) {
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    return 0;
  }
  const preco = data.prices;
  const { child, adult, senior } = countEntrants(entrants);
  const valorTotal = (child * preco.child) + (adult * preco.adult) + (senior * preco.senior);
  return valorTotal;
}

module.exports = { calculateEntry, countEntrants };
