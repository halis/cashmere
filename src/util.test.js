
import chainPath from './util';
import { nestedObjects, treasure } from './util.mock';

describe('chainPath', () => {
  it('should return the list if passed an empty path', () => {
    const path = [];
    const list = [1, 2, 3];
    const result = chainPath(path, list);
    expect(result).to.deep.equal(list);
  });

  it('should return [] if passed empty list', () => {
    const path = ['name', 'first'];
    const list = [];
    const result = chainPath(path, list);
    expect(result).to.deep.equal([]);
  });

  it('should return [] if passed null list', () => {
    const path = ['name', 'first'];
    const list = null;
    const result = chainPath(path, list);
    expect(result).to.deep.equal([]);
  });

  it('should return a flat array of props', () => {
    const path = ['kids'];
    const list = [
      {
        kids: ['Ed', 'Jimmy', 'Steve']
      },
      {
        kids: ['Dumb', 'Dumber']
      }
    ];
    const result = chainPath(path, list);
    expect(result).to.deep.equal(['Ed', 'Jimmy', 'Steve', 'Dumb', 'Dumber']);
  });

  it('should return a flat array of nested props', () => {
    const path = ['pacs', 'pas', 'otms', 'bvs'];

    const list = nestedObjects;
    const result = chainPath(path, list);

    expect(result).to.deep.equal(treasure);
  });

  it('should return [] if path goes nowhere', () => {
    const path = ['bogus'];

    const list = nestedObjects;
    const result = chainPath(path, list);

    expect(result).to.deep.equal([]);
  });

  it('should return [] if error navigating path', () => {
    const path = ['bogus', 'stuff'];

    const list = nestedObjects;
    const result = chainPath(path, list);

    expect(result).to.deep.equal([]);
  });
});
