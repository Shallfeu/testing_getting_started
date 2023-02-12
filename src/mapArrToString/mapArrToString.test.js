const mapArrToString = require('./mapArrToString');

describe('mapArrToString', () => {
  test('correct value', () => {
    expect(mapArrToString([1, 2, 3])).toEqual(['1', '2', '3']);
  });

  test('correct value', () => {
    expect(mapArrToString([1, 2, 3, undefined, null, '2'])).toEqual([
      '1',
      '2',
      '3',
    ]);
  });

  test('correct value', () => {
    expect(mapArrToString([undefined, null, '2'])).toEqual([]);
  });

  test('empty value', () => {
    expect(mapArrToString([])).toEqual([]);
  });

  test('Negative', () => {
    expect(mapArrToString([1, 2, 3])).not.toEqual([1, 2, 3, 4]);
  });
});
