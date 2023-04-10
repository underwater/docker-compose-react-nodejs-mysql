const sut = require('../calculations');

describe('sum function', () => {
    it('2 x 5 = 10', () => {
      expect(sut.mult(2, 5)).toBe(10);
    });
    
    it('6 / 3 = 2', () => {
      expect(sut.divide(6, 3)).toBe(2);
    });
  });
  