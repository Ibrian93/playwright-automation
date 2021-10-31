import { Page, BrowserContext } from 'playwright';
import expect from 'expect';


export class BasePage {
    page: Page;
    context: BrowserContext;

    constructor(page: Page, context: BrowserContext) {
        this.page = page;
        this.context = context;
    }

    public get expect () {
        return expect;
    }

    public goto(optionalUrl: string): Promise<any> {
        return this.page.goto(optionalUrl);
    }

    public clickElement(element: string): Promise<any> {
        return this.page.click(element);
    }

    public fillField(element: string, value: string): Promise<any> {
        return this.page.fill(element, value);
    }
}