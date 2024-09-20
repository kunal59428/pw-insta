
exports.LoginPage = class LoginPage {

    constructor(page) {

        this.page = page
        this.username_field = page.getByLabel('Phone number, username, or email')
        this.password_field = page.getByLabel('Password')
        this.login_button = page.locator('button._acan._acap._acas._aj1-._ap30'); 
    }

    async gotoLoginPage() { 
        await this.page.goto('https://www.instagram.com/accounts/login/');
    }
    async login(username, password){

        await this.username_field.fill(username);
        await this.password_field.fill(password);
       
        await this.login_button.click()
    }

}

