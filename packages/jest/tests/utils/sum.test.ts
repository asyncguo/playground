import sum from 'utils/sum';

describe('sum', () => {
  it('add 1 + 1 to 2', () => {
    expect(sum(1, 1)).toEqual(2);
  });
})