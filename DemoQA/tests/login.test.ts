import { HomePage } from '../src/pages/home.page';
import test  from './user.fixture';


test.describe('User login in the DemoQA website', async () => {
    test('User login with correct credentials', async({page, context}) => {
        const homepage = new HomePage(page, context);
        await page.goto('/test')
        //await homepage.goToHomePage();
        //await homepage.goToLoginPage();
    })
});