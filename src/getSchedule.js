const data = require('../data/zoo_data');
const { hours } = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

const horarioAbertura = (dia) => {
  let horaDisponivel;
  const horarioOpen = hours[dia].open;
  const horarioClose = hours[dia].close;

  if (dia === 'Monday') {
    horaDisponivel = 'CLOSED';
  } else {
    horaDisponivel = `Open from ${horarioOpen}am until ${horarioClose}pm`;
  }
  return horaDisponivel;
};

const disponivel = (dia) => {
  let diaDisponivel;
  if (dia === 'Monday') {
    diaDisponivel = 'The zoo will be closed!';
  } else {
    diaDisponivel = species.filter((elemento) => elemento.availability.includes(dia))
      .map((elemento) => elemento.name);
  }
  return diaDisponivel;
};

const organ = () => {
  const dia = Object.keys(hours);
  return dia.reduce((acc, atual) => {
    acc[atual] = {
      officeHour: horarioAbertura(atual),
      exhibition: disponivel(atual),
    };
    return acc;
  }, {});
};

const animal = (especie) => species.find((elemento) => elemento.name === especie).availability;

function getSchedule(scheduleTarget) {
  const diaSemana = Object.keys(hours);
  const animais = species.map((elemento) => elemento.name);

  if (!scheduleTarget || (!diaSemana.includes(scheduleTarget)
    && !animais.includes(scheduleTarget))) {
    return organ();
  }
  if (diaSemana.includes(scheduleTarget)) {
    return {
      [scheduleTarget]: organ()[scheduleTarget],
    };
  }
  return animal(scheduleTarget);
}

console.log(getSchedule());
module.exports = getSchedule;
