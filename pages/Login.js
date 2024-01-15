require('dotenv').config();

class Login {
  constructor(page) {
    this.page = page;
  }

  async loginToSite() {
    const siteAuthUserName = process.env.SITEAUTHUSERNAME;
    const siteAuthPassword = process.env.SITEAUTHPASSWORD;
    const loginUrl = `https://${siteAuthUserName}:${siteAuthPassword}@qauto.forstudy.space/`;
    await this.page.goto(loginUrl);
  }
}

export default Login;
