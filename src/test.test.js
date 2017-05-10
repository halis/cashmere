
const pages = () => [1, 2, 3];

test.skip('Something good should happen', [
  {
    desc: 'Should get first name',
    actual: pages(),
    expected: store.pages,
  },
  {
    desc: 'Should get last name',
    actual: null,
    expected: { hello: 'world' },
  }
]);
