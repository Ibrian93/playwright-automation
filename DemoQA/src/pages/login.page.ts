import { BasePage } from "./base.page";

export class LoginPage extends BasePage {
    public get elements() {
        return {
            userNameField: 'id=userName',
            passwordField: 'id=password',
            login: 'id=login',
        }
    };

    async fillLogin(username: string, password: string) {
        await this.fillField(this.elements.userNameField, username);
        await this.fillField(this.elements.passwordField, password);
    }

    async loginUser() {
        await this.clickElement(this.elements.login);
    }
}