import { BasePage } from "./base.page";

export class HomePage extends BasePage {
    public get elements() {
        return {
            loginButton: 'text=Login',
            userNameValue: 'id=userName-value',
        }
    };

    async goToHomePage() {
        await this.goto('/books');
    }

    async goToLoginPage() {
        await this.clickElement(this.elements.loginButton);
    }

    public async getUsernameValue() {
        return await this.page.textContent('#userName-value');
    }
}