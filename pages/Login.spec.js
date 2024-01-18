require('dotenv').config();

export default class Login {
  constructor({ page }) {
    this.page = page;
  }

  async loginToSite() {
    const context = await this.page.context();
    await context.setHTTPCredentials({
      username: process.env.SITEAUTHUSERNAME,
      password: process.env.SITEAUTHPASSWORD
    });
    await this.page.goto('/');
  }
  
  async openProfileTab() {
    await this.page.goto('/panel/profile');
  }
}
