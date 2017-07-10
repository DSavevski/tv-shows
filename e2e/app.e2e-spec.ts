import { TvShowsPage } from './app.po';

describe('tv-shows App', () => {
  let page: TvShowsPage;

  beforeEach(() => {
    page = new TvShowsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
