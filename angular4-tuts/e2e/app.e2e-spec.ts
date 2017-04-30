import { Angular4TutsPage } from './app.po';

describe('angular4-tuts App', () => {
  let page: Angular4TutsPage;

  beforeEach(() => {
    page = new Angular4TutsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
