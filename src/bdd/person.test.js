
describe('person', () => {
  context('#firstName()', () => {
    it('Should get first name', () => {
      expect({ hello: 'world' }).to.deep.equal({ hello: 'world' });
    });

    it('Should get middle name', () => {
      expect(1).to.equal(1);
    });

    it('Should get last name', () => {
      expect(1).to.equal(1);
    });

    it('Should get age', () => {
      expect(1).to.equal(1);
    });

    it('Should get kids', () => {
      expect(1).to.equal(1);
    });
  });

  context('#lastName()', () => {
    it('Should get middle name', () => {
      expect(1).to.equal(1);
    });

    it('Should get last name', () => {
      expect(1).to.equal(1);
    });
  });
});

describe('animal', () => {
  context('#run()', () => {
    it('Test #1', () => {
      expect(1).to.deep.equal(1);
    });

    it('Test #2', () => {
      expect(1).to.deep.equal(1);
    });

    it('Test #3', () => {
      expect(1).to.deep.equal(1);
    });

    it('Test #4', () => {
      expect(1).to.deep.equal(1);
    });

    it('Test #5', () => {
      expect(1).to.deep.equal(1);
    });

    it('Test #6', () => {
      expect(1).to.deep.equal(1);
    });

    it('Should be fast', () => {
      expect(1).to.equal(2);
    });

    it('Should be quiet', () => {
      expect({ hello: 'world' }).to.deep.equal({ abc: '123' });
    });
  });
});
