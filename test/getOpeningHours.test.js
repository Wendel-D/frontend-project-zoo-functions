const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
    it('return test', () => {
        expect(getOpeningHours()).toEqual({
            Tuesday: {open: 8, close: 6 },
            Wednesday: { open: 8, close: 6 },
            Thusday: { open: 10, close: 8 },
            Friday: { open: 10, close: 8 },
            Saturday: {open: 8, close: 10 },
            Sunday: { open: 8, close: 8 },
            Monday: { open: 8, close: 8 },
        });
    })
    
});
