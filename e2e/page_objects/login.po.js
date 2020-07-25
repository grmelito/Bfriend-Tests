const {browser, element } = require('protractor')

class Login {
    constructor() {
        this.inputEmail = element(by.id('inputEmail4'))
        this.inputSenha = element(by.id('inputPassword4'))
        this.loginButton = element(by.buttonText('Entre'))
        //this.loginButton = element(by.cssContainingText('.btn-login', 'Entre'))
    };

    realizarLogin(email, senha) {
        this.inputEmail.sendKeys(email)
        this.inputSenha.sendKeys(senha)
        this.loginButton.click()
    };
}

module.exports = new Login();