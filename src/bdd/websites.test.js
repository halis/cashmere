/* eslint-disable no-unused-expressions */

describe.skip('websites', () => {
  it.async('google', (done) => {
    request.get('https://www.google.com')
      .then(res => {
        expect(res).to.include({
          status: 200,
          statusText: 'OK',
        });
        done();
      })
      .catch(err => {
        done(err);
      });
  });

  it.async('facebook', (done) => {
    request.get('https://www.facebook.com')
      .then(res => {
        expect(res.status).to.equal(200);
        expect(res.statusText).to.equal('OK');
        done();
      })
      .catch(err => {
        done(err);
      });
  });
});
