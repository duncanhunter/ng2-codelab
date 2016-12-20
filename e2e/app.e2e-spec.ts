import { Ng2CodelabPage } from './app.po';

describe('ng2-codelab App', function() {
  let page: Ng2CodelabPage;

  beforeEach(() => {
    page = new Ng2CodelabPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
