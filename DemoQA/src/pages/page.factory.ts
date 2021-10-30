import { HomePage } from './home.page';
import { Page, BrowserContext } from 'playwright'

export class PageFactory {
    homePage: HomePage;

    constructor(public page: Page, public context: BrowserContext) {
       this.homePage = new HomePage(page, context); 
    }
}