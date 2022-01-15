import { HomePage } from '../pages/home.page';
import { LoginPage } from '../pages/login.page';
import { expect } from '@playwright/test';
import test from './user.fixture';

test.describe('User login in the DemoQA website', async () => {
  test('User login with correct credentials', async ({ page, user }) => {
    const homePage = new HomePage(page);
    await homePage.goToHomePage();
    await homePage.goToLoginPage();
    const loginPage = new LoginPage(page);
    await loginPage.fillLogin(user['username'], user['password']);
    await loginPage.loginUser();
    expect(await homePage.getUsernameValue()).toBe('ibrian93');
  });

  test('User login with empty username', async ({ page, user }) => {
    const homePage = new HomePage(page);
    await homePage.goToHomePage();
    await homePage.goToLoginPage();
    const loginPage = new LoginPage(page);
    await loginPage.fillLogin('', user['password']);
    await loginPage.loginUser();
    expect(await homePage.isUsernameMissing()).toBe(true);
  });

  test('User login with invalid credentials, invalid password', async ({
    page,
    user,
  }) => {
    const homePage = new HomePage(page);
    await homePage.goToHomePage();
    await homePage.goToLoginPage();
    const loginPage = new LoginPage(page);
    await loginPage.fillLogin(user['username'], 'Test83!');
    await loginPage.loginUser();
    expect(await loginPage.isUsernamePasswordWarningPresent()).toBe(true);
  });
});
