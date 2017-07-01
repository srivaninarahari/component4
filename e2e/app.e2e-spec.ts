import { Login1Page } from './app.po';

describe('login1 App', () => {
  let page: Login1Page;

  beforeEach(() => {
    page = new Login1Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
