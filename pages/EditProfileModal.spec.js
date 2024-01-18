import { test, expect } from '@playwright/test';

export default class EditModal {
  constructor(page) {
    this.page = page;
    this.locators = {
        editProfileButton: 'button.btn-primary',
        photoBrowseInput: 'input#editProfilePhoto',
        saveButton: 'div.modal-footer button:has-text("Save")'
    };
  }

  async openEditProfileModal() {
    await this.page.click(this.locators.editProfileButton);
  }
 
  async uploadPhoto() {
    const input = await this.page.locator(this.locators.photoBrowseInput);
    await input.setInputFiles('media/logo2.jpg');
  }  

  async confirmAction() {
    await this.page.click(this.locators.saveButton);
  }

  async waitForSuccessfulPhotoUpload() {
    const response = await this.page.waitForResponse('https://qauto.forstudy.space/api/users/profile');
    return response;
  }
  
}