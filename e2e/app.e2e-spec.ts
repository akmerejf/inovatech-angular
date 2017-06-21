import { InovatechPage } from './app.po';

describe('inovatech App', () => {
  let page: InovatechPage;

  beforeEach(() => {
    page = new InovatechPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
