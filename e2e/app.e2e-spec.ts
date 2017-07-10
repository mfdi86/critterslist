import { CritterslistPage } from './app.po';

describe('critterslist App', () => {
  let page: CritterslistPage;

  beforeEach(() => {
    page = new CritterslistPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
