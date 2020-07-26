const { browser, element, protractor } = require('protractor')

const Cadastro = require('../page_objects/cadastro.po')
const Login = require('../page_objects/login.po')
const Home = require('../page_objects/home.po')

describe('Flow Completo', () => {

    it('Realizar cadastro de conta', () => {
        browser.waitForAngularEnabled(false)
        browser.get('http://localhost:3000/')
        Home.clicarCadastro()

        Cadastro.cadastrarUsuario('Claire', 'claire@gmail.com', 'claire123')

        const alertDialog = browser.switchTo().alert();
        expect(alertDialog.getText()).toEqual('Cadastro realizado com sucesso!')
        browser.sleep(1000)
        alertDialog.dismiss()

    })

    it('Fazer login', () => {
        browser.waitForAngularEnabled(false)
        browser.get('http://localhost:3000/login');

        Login.realizarLogin('claire@gmail.com', 'claire123')

        expect(browser.getCurrentUrl()).toEqual('http://localhost:3000/homeLogada');
    })
})