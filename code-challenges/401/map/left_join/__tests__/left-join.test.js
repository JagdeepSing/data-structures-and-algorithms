const leftJoinMap = require('../left-join.js');

describe('Left Join Maps', () => {
  const emptyMap = new Map();
  const mapOne = new Map();
  mapOne.set('one', 'noe');
  mapOne.set('two', 'otw');
  mapOne.set('three', 'eerth');

  const mapTwo = new Map();
  mapTwo.set('one', 'neo');
  mapTwo.set('three', 'reeth');

  it('returns empty object if first map empty', () => {
    expect(leftJoinMap(emptyMap, mapOne)).toEqual({});
  });

  it('returns null if no maps provided', () => {
    expect(leftJoinMap()).toBeNull();
  });

  it('returns left joined object given valid input', () => {
    const result = leftJoinMap(mapOne, mapTwo);
    const expected = {
      one: ['noe', 'neo'],
      two: ['otw', null],
      three: ['eerth', 'reeth'],
    };

    expect(result).toEqual(expected);
  });
});
