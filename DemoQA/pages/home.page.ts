import { Page } from '@playwright/test';

export class HomePage {
  public get elements() {
    return {
      loginButton: 'text=Login',
      userNameValue: 'id=userName-value',
      usernameAlertMissingInput: '.is-invalid',
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
    await this.page.waitForSelector(this.elements.userNameValue);
    return this.page.textContent('#userName-value');
  }

  public async isBookByTitleAvailable(bookTitle: string) {
    await this.page.waitForSelector(`text=${bookTitle}`);
    return this.page.isVisible(`text=${bookTitle}`);
  }

  async isUsernameMissing() {
    return this.page.isVisible(this.elements.usernameAlertMissingInput);
  }
}
