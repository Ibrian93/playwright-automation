import { Page } from '@playwright/test';

export class LoginPage {
  public get elements() {
    return {
      userNameField: 'id=userName',
      passwordField: 'id=password',
      login: 'id=login',
      loginWarningMessage: 'text=Invalid username or password!',
    };
  }

  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async fillLogin(username: string, password: string) {
    await this.page.fill(this.elements.userNameField, username);
    await this.page.fill(this.elements.passwordField, password);
  }

  async loginUser() {
    await this.page.click(this.elements.login);
  }

  async isUsernamePasswordWarningPresent() {
    await this.page.waitForSelector(this.elements.loginWarningMessage);
    return this.page.isVisible(this.elements.loginWarningMessage);
  }
}
