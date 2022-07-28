const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('testar o horario', () => {
    expect(getOpeningHours()).toEqual({
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    });
  });
  it('Teste de aviso Fechado', () => {
    expect(getOpeningHours('Monday', '12:30-AM')).toBe('The zoo is closed');
  });
  it('Teste de aviso Aberto', () => {
    expect(getOpeningHours('Thursday', '10:30-AM')).toBe('The zoo is open');
  });
  it('Testando validade de dia', () => {
    expect(() => getOpeningHours('every')).toThrowError('The day must be valid. Example: Monday');
  });
});

describe('Testando dias diferentes', () => {
  it('Dias diferentes', () => {
    expect(() => getOpeningHours('Monday', '12:30-AC')).toThrow();
    expect(() => getOpeningHours('Monday', '12:AC-AM')).toThrow();
    expect(() => getOpeningHours('Monday', 'E1:30-AM')).toThrow();
    expect(() => getOpeningHours('Monday', '13:30-AM')).toThrow();
    expect(() => getOpeningHours('Monday', '24:88-AM')).toThrowError();
  });
});
