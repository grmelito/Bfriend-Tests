const {browser, element } = require('protractor')

class Home {
    constructor() {
        this.cards = element(by.css('.container-cards'))
        this.icones = element(by.css('.icones'))
        this.loginButton = element(by.buttonText('Entrar'))
        this.registerButton = element(by.buttonText('Cadastre-se'))

    };

    clicarLogin() {
        this.loginButton.click()
    };
    clicarCadastro() {
        this.registerButton.click()
    };
}

module.exports = new Home();