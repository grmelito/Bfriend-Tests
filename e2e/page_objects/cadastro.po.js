const { browser, element } = require('protractor')

class Cadastro {
    constructor() {
        this.nome = element.all(by.id('inputEmail4')).first()
        this.email = element.all(by.id('inputEmail4')).last()
        this.senha = element(by.id('inputPassword4'))
        this.registerButton = element(by.buttonText('Cadastre-se'))

    };

    cadastrarUsuario(nome, email, senha) {
        this.nome.sendKeys(nome);
        this.email.sendKeys(email);
        this.senha.sendKeys(senha);
        this.registerButton.click();
    };
}

module.exports = new Cadastro();