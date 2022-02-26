import { HomePage } from '../pages/home.page';
import { expect } from '@playwright/test';
import test from '../helpers/utils/books.fixture';

test.describe('User searches a book in the DemoQA website', async () => {
  test('User searches an existing book', async ({ page, books }) => {
    const homePage = new HomePage(page);
    await homePage.goToHomePage();
    for (const key in books) {
      expect(await homePage.isBookByTitleAvailable(books[key]['title'])).toBe(
        true,
      );
    }
  });

  test('User searches a non existing book', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.goToHomePage();
    expect(await homePage.isBookByTitleAvailable('Anna Karenina')).toBe(false);
  });
});
