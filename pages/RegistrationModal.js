import { test, expect } from '@playwright/test';
import GenerateUniqueEmail  from '../fixtures/utils';
const uniqueEmail = GenerateUniqueEmail();

export default class RegistrationModal {
  constructor(page) {
    this.page = page;
    this.locators = {
      signInButton: 'button.header_signin',
      signUpButton: 'button.btn-primary',
      registrationButton: '[type="button"].btn-link',
      nameInput: '#signupName',
      lastNameInput: '#signupLastName',
      emailInput: '#signupEmail',
      passwordInput: '#signupPassword',
      reEnterPasswordInput: '#signupRepeatPassword',
      registerButton: 'div.modal-footer button:has-text("Register")',
      userPhotoIcon: '[alt="User photo"]',
    };
  }

  async openLoginModal() {
    await this.page.click(this.locators.signInButton);
  }

  async openRegistrationModal() {
    await this.page.click(this.locators.registrationButton);
  }

  async openRegistrationForm() {
    await this.page.click(this.locators.signUpButton);
  }

  async fillOutNameInput() {
    await this.page.fill(this.locators.nameInput, 'John');
  }

  async nameInputValueCheck() {
    await expect(this.page.locator(this.locators.nameInput)).toHaveValue('John');
  }

  async fillOutLastNameInput() {
    await this.page.fill(this.locators.lastNameInput, 'Doe');
  }

  async lastNameInputValueCheck() {
    await expect(this.page.locator(this.locators.lastNameInput)).toHaveValue('Doe');
  }

  async fillOutEmailInput() {
    await this.page.fill(this.locators.emailInput, uniqueEmail);
  }

  async emailInputValueCheck() {
    await expect(this.page.locator(this.locators.emailInput)).toHaveValue(uniqueEmail);
  }


  async fillOutPasswordInput() {
    await this.page.fill(this.locators.passwordInput, 'passworD@2121');
  }

  async PasswordInputValueCheck() {
    await expect(this.page.locator(this.locators.passwordInput)).toHaveValue('passworD@2121');
  }

  async fillOutReEnterPasswordInput() {
    await this.page.fill(this.locators.reEnterPasswordInput, 'passworD@2121');
  }

  async reEnterPasswordInputValueCheck() {
    await expect(this.page.locator(this.locators.reEnterPasswordInput)).toHaveValue('passworD@2121');
  }

  async userProfileIconVisibilityCheck() {
    await expect(this.page.locator(this.locators.userPhotoIcon)).toBeVisible();
  }


  async clickRegisterButton() {
    await this.page.click(this.locators.registerButton);
  }

}