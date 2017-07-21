
describe('websites', () => {
  it.async('Facebook', done => {
    request.get('https://www.facebook.com', (err, res) => {
      expect(err).to.equal(null);
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it.async('Halis Technology', done => {
    request.get('https://www.halistechnology.com', err => {
      expect(err).to.not.equal(null);
      expect(err).to.equal(null);
      done();
    });
  });
});
