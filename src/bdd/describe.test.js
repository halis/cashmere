
describe('describe', () => {
  it('Should fail if not supplied correct args', () => {
    expect(describe).to.throw(Error);
    expect(() => describe('hello')).to.throw(Error);
    expect(() => describe(null, () => null)).to.throw(Error);
  });

  it('Should not fail if supplied correct args', () => {
    expect(() => describe('hello', () => null)).to.not.throw(Error);
  });
});
