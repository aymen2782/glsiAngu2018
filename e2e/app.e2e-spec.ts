import { GlsiPage } from './app.po';

describe('glsi App', () => {
  let page: GlsiPage;

  beforeEach(() => {
    page = new GlsiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
