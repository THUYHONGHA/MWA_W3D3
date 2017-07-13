import { Homework13Page } from './app.po';

describe('homework13 App', () => {
  let page: Homework13Page;

  beforeEach(() => {
    page = new Homework13Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
