const { expect } = require(`chai`);
const { map } = require(`./map`);

describe(`map over array`, () => {
  it(`returns [] for empty array`, () => {
    expect(map([], Number)).to.deep.equal([]);
  });

  it(`returns a shallow copy of the array when passed the id function`, () => {
    const id = x => x;
    const input = [1, 2, `hello`, { x: 3, y: 4 }];
    expect(map(input, id)).to.deep.equal(input);
  });

  it(`applies the passed function to all the array entries`, () => {
    const input = `1 2 10 13.3 19 hello`.split(` `);
    expect(map(input, Number)).to.deep.equal(input.map(Number));
  });

  it(`passed the index as second argument`, () => {
    const input = Array.from({ length: 20 });
    expect(map(input, (_, i) => i)).to.deep.equal(input.map((_, i) => i));
  });
});
