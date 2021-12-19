import { HomePage } from '../pages/home.page';
import { expect } from '@playwright/test';
import test from './books.fixture';

test.describe('User searches a book in the DemoQA website', async () => {
    test('User searches an existing book', async ({ page, books }) => {
        const homePage = new HomePage(page);
        await homePage.goToHomePage();
        console.log(books);
    })
})