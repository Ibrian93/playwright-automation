import { PageFactory } from '../src/pages/page.factory';
import test  from './user.fixture';
import { expect } from '@playwright/test';


test.describe('User login in the DemoQA website', async () => {
    test('User login with correct credentials', async({page, context, user}) => {
        const pageObj = new PageFactory(page, context);
        const homePage = pageObj.homePage;
        await homePage.goToHomePage();
        await homePage.goToLoginPage();
        const loginPage = pageObj.loginPage;
        await loginPage.fillLogin(user['username'], user['password']);
        await loginPage.loginUser();
        expect(homePage.elements.userNameValue)
    })
});