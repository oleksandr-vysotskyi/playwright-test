import { test, expect } from '@playwright/test';
import EditModal from '../pages/EditProfileModal.spec';
import Login from '../pages/Login.spec.js';

test.describe('User profile photo upload of Hillel QA Auto site', () => {
  test('Photo upload check @fast', async ({ page }) => {
    const editModal = new EditModal(page);
    const login = new Login({ page });

    await login.openProfileTab();
    await editModal.openEditProfileModal();
    await editModal.uploadPhoto();
    await editModal.confirmAction();
    await editModal.waitForSuccessfulPhotoUpload().then((response) => {
      expect(response.status()).toBe(200);
    });
  });
});
