import test from '../helpers/utils/user.fixture';
import { HomePage } from '../pages/home.page';
import { LoginPage } from '../pages/login.page';

test.describe('User books collection management', async () => {
    test.beforeEach(async({page, user}) => {
        const homePage = new HomePage(page);
        await homePage.goToHomePage();
        await homePage.goToLoginPage();
        const loginPage = new LoginPage(page);
        await loginPage.fillLogin(user['username'], user['password']);
        await loginPage.loginUser();
    });
});
