const {browser, element } = require('protractor')

const Home = require('../page_objects/home.po')

describe('Flow Deslogado', () => {
    afterEach(() => browser.get('http://localhost:3000/'))
   
    it('Cards e icones renderizando', () => {
        browser.waitForAngularEnabled(false)
        browser.get('http://localhost:3000/')

        expect(Home.cards.isDisplayed()).toBe(true)
        expect(Home.icones.isDisplayed()).toBe(true)
    })

    it('Botoes Clicaveis', () => {
        browser.waitForAngularEnabled(false)
        Home.clicarLogin()
        expect(browser.getCurrentUrl()).toEqual('http://localhost:3000/login');
        browser.sleep(1000)

        browser.navigate().back()
        Home.clicarCadastro()
        expect(browser.getCurrentUrl()).toEqual('http://localhost:3000/cadastro');
    })
})