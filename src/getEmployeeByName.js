const data = require('../data/zoo_data');
const { employees } = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (!employeeName) return {};
  return employees.find((n) => n.firstName === employeeName || n.lastName === employeeName);
}

console.log(getEmployeeByName('Wishart'));

module.exports = getEmployeeByName;
