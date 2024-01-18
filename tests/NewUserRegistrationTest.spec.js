import { test, expect } from '@playwright/test';
import RegistrationModal from '../pages/RegistrationModal';
import Login from '../pages/Login.spec.js';

test.describe('User registration check of QA Auto Hillel site', () => {
  test('User registration check', async ({ page }) => {
    const registrationModal = new RegistrationModal(page);
    const login = new Login({ page });

    await login.loginToSite();
    await registrationModal.openRegistrationForm();
    await registrationModal.fillOutNameInput();
    await registrationModal.nameInputValueCheck();
    await registrationModal.fillOutLastNameInput();
    await registrationModal.lastNameInputValueCheck();
    await registrationModal.fillOutEmailInput();
    await registrationModal.emailInputValueCheck();
    await registrationModal.fillOutPasswordInput();
    await registrationModal.PasswordInputValueCheck();
    await registrationModal.fillOutReEnterPasswordInput();
    await registrationModal.reEnterPasswordInputValueCheck();
    await registrationModal.clickRegisterButton();
    await registrationModal.userProfileIconVisibilityCheck();
  });
});
