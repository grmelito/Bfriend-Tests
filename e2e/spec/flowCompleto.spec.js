const { browser, element, protractor } = require('protractor')

const Cadastro = require('../page_objects/cadastro.po')
const Login = require('../page_objects/login.po')
const Home = require('../page_objects/home.po')
const HomeLogada = require('../page_objects/homeLogada.po')


describe('Flow Completo', () => {

    it('Deve Realizar cadastro de conta', () => {
        browser.waitForAngularEnabled(false)
        browser.get('http://localhost:3000/')
        Home.clicarCadastro()

        Cadastro.cadastrarUsuario('Claire', 'claire@gmail.com', 'claire123')

        const alertDialog = browser.switchTo().alert();
        expect(alertDialog.getText()).toEqual('Cadastro realizado com sucesso!')
        browser.sleep(1000)
        alertDialog.dismiss()

    })

    it('Deve Fazer login', () => {
        browser.waitForAngularEnabled(false)
        browser.get('http://localhost:3000/login');

        Login.realizarLogin('claire@gmail.com', 'claire123')

        expect(browser.getCurrentUrl()).toEqual('http://localhost:3000/homeLogada');
    })

    it('Deve buscar anuncios', () => {
        browser.waitForAngularEnabled(false)
        browser.get('http://localhost:3000/homeLogada');
        browser.sleep(2000)
        HomeLogada.buscarAnuncio('Centro')

        expect(HomeLogada.sectionCards.isPresent()).toBe(true)
    })
})