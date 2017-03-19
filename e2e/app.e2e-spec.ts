import { IngressoPage } from './app.po';

describe('ingresso App', function() {
  let page: IngressoPage;

  beforeEach(() => {
    page = new IngressoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
