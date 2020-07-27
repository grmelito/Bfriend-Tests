const { browser, element, protractor } = require('protractor')

const Cadastro = require('../page_objects/cadastro.po')
const Login = require('../page_objects/login.po')
const Home = require('../page_objects/home.po')
const HomeLogada = require('../page_objects/homeLogada.po')
const CadastroFornecedor = require('../page_objects/cadastroFornecedor.po')
const CadastroLoja = require('../page_objects/cadastroLoja.po')


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
        browser.sleep(1000)
        HomeLogada.buscarAnuncio('Centro')

        expect(HomeLogada.sectionCards.isPresent()).toBe(true)
    })

    it('Deve virar fornecedor', () => {
        browser.waitForAngularEnabled(false)
        browser.get('http://localhost:3000/cadastroFornecedor');
        CadastroFornecedor.virarFornecedor('44532115689', '11065489', 'Rua Almirante', '32', 'Apt 14', 'Centro')

        const alertDialog = browser.switchTo().alert();
        browser.sleep(2000)
        expect(alertDialog.getText()).toEqual('Upgrade Realizado com sucesso!')
        alertDialog.dismiss()
    })

    it('Deve cadastrar um anuncio', () => {
        browser.waitForAngularEnabled(false)
        browser.get('http://localhost:3000/cadastroLoja');
        CadastroLoja.cadastrarAnuncio('Security Tech', 'SecTech', 'SecTechOficial',
         'https://SecTech.com', 'Nós somos uma empresa de consultoria com foco em segurança', '13996009843')

        const alertDialog = browser.switchTo().alert();
        browser.sleep(1000)
        expect(alertDialog.getText()).toEqual('Anuncio Cadastrado com succeso!')
        alertDialog.dismiss()
    })

})