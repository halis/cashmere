
const fs = require('fs');
const path = require('path');
const snapshot = require('./index');

const oldPath = path.join(process.cwd(), './src/snapshot/hello.old.snapshot');
const newPath = path.join(process.cwd(), './src/snapshot/hello.new.snapshot');

const oldContent = 'Hello, world';
const newContent = 'Yolo for real';

describe.skip('snapshot', () => {
  context('#create()', () => {
    it('Should create the snapshot file', () => {
      snapshot.create(oldPath, oldContent);
      expect(fs.existsSync(oldPath)).to.equal(true);

      snapshot.create(newPath, newContent);
      expect(fs.existsSync(newPath)).to.equal(true);
    });
  });

  context('#compare()', () => {
    it('Should return false for different snapshots', () => {
      expect(snapshot.compare(oldPath, newPath)).to.equal(false);
    });
  });

  context('#update()', () => {
    it('Should return true if snapshot was updated', () => {
      expect(snapshot.update(oldPath, newPath)).to.equal(true);
    });
  });

  context('#compare()', () => {
    it('Should return true for identical snapshots', () => {
      expect(snapshot.compare(oldPath, newPath)).to.equal(true);
    });
  });

  context('#delete()', () => {
    it('Should return true if snapshot deleted', () => {
      expect(snapshot.delete(oldPath, newPath)).to.equal(true);
    });
  });

  context('#rewrite()', () => {
    it('Should create a snapshot with rewrite applied', () => {
      const path1 = path.join(process.cwd(), './src/snapshot/hello.old.snapshot');
      const fns = [
        x => x.replace(/\s+/g, ''),
        x => x.replace('Y', 'H')
      ];
      snapshot.create(path1, 'Yello there dear world', fns);
      expect(snapshot.read(path1)).to.equal('Hellotheredearworld');
      snapshot.delete(path1);
    });
  });
});
