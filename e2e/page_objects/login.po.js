

class Login {
    constructor() {
        this.inputEmail = element(by.id('inputEmail4'))
        this.inputSenha = element(by.id('inputPassword4'))
        this.loginButton = driver.findElement(By.cssSelector("button[class='btn btn-login']"))
    };

    realizarLogin(email, senha) {
        this.inputEmail.sendKeys(email)
        this.inputSenha.sendKeys(senha)
    };
}

module.exports = new Login();