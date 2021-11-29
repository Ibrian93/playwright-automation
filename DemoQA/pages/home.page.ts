import { Page } from '@playwright/test';

export class HomePage {
  public get elements() {
    return {
      loginButton: 'text=Login',
      userNameValue: 'id=userName-value',
      usernameAlertMissingInput: '.is-invalid'
    };
  }

  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goToHomePage() {
    await this.page.goto('/books');
  }

  async goToLoginPage() {
    await this.page.click(this.elements.loginButton);
  }

  public async getUsernameValue() {
    return this.page.textContent('#userName-value');
  }

  async isUsernameMissing() {
    return this.page.isVisible(this.elements.usernameAlertMissingInput);
  }
}
