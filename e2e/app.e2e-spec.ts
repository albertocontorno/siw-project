import { SiwProjectPage } from './app.po';

describe('siw-project App', () => {
  let page: SiwProjectPage;

  beforeEach(() => {
    page = new SiwProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
