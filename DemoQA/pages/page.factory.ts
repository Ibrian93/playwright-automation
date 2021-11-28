import { HomePage } from './home.page';
import { LoginPage } from './login.page'; 
import { Page, BrowserContext } from 'playwright'

export class PageFactory {
    homePage: HomePage;
    loginPage: LoginPage;

    constructor(public page: Page, public context: BrowserContext) {
       this.homePage = new HomePage(page, context); 
       this.loginPage = new LoginPage(page, context);
    }
}