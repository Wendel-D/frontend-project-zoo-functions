const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Testes de return indefinido', () => {
    expect(handlerElephants()).toBe(undefined);
  });
  it('Testes de return string', () => {
    expect(handlerElephants(21)).toBe('Parâmetro inválido, é necessário uma string');
  });
  it('Testes se retorna a quantidade de elefantes', () => {
    expect(handlerElephants('count')).toBe(4);
  });
  it('Se retorna um array', () => {
    expect(typeof handlerElephants('names')).toBe('object');
  });
  it('testando retorno de averageAge', () => {
    expect(handlerElephants('averageAge')).toEqual(10.5);
  });
  it('Teste se retorna    a localização dos elefantes dentro do Zoológico', () => {
    expect(handlerElephants('location')).toBe('NW');
  });
  it('Teste se retorna a popularidade dos elefantes', () => {
    expect(handlerElephants('popularity')).toEqual(5);
  });
  it('Teste se retorna um array com a relação de dias em que é possível visitar os elefantes', () => {
    const expectOutput = ['Friday', 'Saturday', 'Sunday', 'Tuesday'];
    expect(handlerElephants('availability')).toEqual(expectOutput);
  });
  it('Teste se retona nulo com parametro tipo string aleatório', () => {
    expect(handlerElephants('ola')).toBe(null);
  });
});
