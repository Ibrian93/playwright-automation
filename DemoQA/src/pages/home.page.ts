import { BasePage } from "./base.page";

export class HomePage extends BasePage {
    public get elements() {
        return {
            loginButton: 'login',
        }
    };

    async goToHomePage() {
        await this.goto('/books');
    }

    async goToLoginPage() {
        await this.clickElement(this.elements.loginButton);
    }
}