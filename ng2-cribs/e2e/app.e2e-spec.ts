import { Ng2CribsPage } from './app.po';

describe('ng2-cribs App', () => {
  let page: Ng2CribsPage;

  beforeEach(() => {
    page = new Ng2CribsPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
