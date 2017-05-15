
describe.skip('context', () => {
  it('Should fail if not supplied correct args', () => {
    expect(context).to.throw(Error);
    expect(() => context('hello')).to.throw(Error);
    expect(() => context(null, () => null)).to.throw(Error);
  });

  it('Should not fail if supplied correct args', () => {
    expect(() => context('hello', () => null)).to.not.throw(Error);
  });
});
