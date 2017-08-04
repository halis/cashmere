
describe('websites', () => {
  it.async('Facebook', (done, request) => {
    request.get('https://www.facebook.com', (err, res) => {
      expect(err).to.equal(null);
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it.async('Halis Technology', (done, request) => {
    request.get('https://www.halistechnology.com', (err, res) => {
      expect(err).to.equal(null);
      expect(res.statusCode).to.equal(200);
      done();
    });
  });
});
