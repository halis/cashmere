
describe('it', () => {
  it('Should fail if not supplied correct args', () => {
    expect(it).to.throw(Error);
    expect(() => it('hello')).to.throw(Error);
    expect(() => it(null, () => null)).to.throw(Error);
  });

  it('Should not fail if supplied correct args', () => {
    expect(() => it('hello', () => null)).to.not.throw(Error);
  });
});
