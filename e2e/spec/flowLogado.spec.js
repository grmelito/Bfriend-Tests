const {browser, element } = require('protractor')

const Login = require('../page_objects/login.po');
const HomeLogada = require('../page_objects/homeLogada.po');
const Perfil = require('../page_objects/perfil.po');

describe('Flow Logado na aplicação', () => {
    
    it('Fazer login', () => {
        browser.waitForAngularEnabled(false)
        browser.get('http://localhost:3000/login');

        Login.realizarLogin('GabrielRuiz@gmail.com', 'Gabriel123')

        browser.sleep(1000)
        expect(browser.getCurrentUrl()).toEqual('http://localhost:3000/homeLogada');
    });

    it('Deve mostrar o perfil do anuncio', () => {
        browser.waitForAngularEnabled(false)
        browser.get('http://localhost:3000/homeLogada');
        HomeLogada.clicarNoAnuncio()

        browser.sleep(1000)
        expect(browser.getCurrentUrl()).toEqual('http://localhost:3000/loja');
    });

    it('Deve atualizar os dados do usuario', () => {
        browser.waitForAngularEnabled(false)
        browser.get('http://localhost:3000/perfilUsuario');
        Perfil.atualizarDados('Saulo Silva', 'M', '11075689', 'Rua das Tulipas', 
        '173', 'Apt 30', 'Boqueirão')

        const alertDialog = browser.switchTo().alert();
        browser.sleep(1000)
        expect(alertDialog.getText()).toEqual('Informações Atualizadas!')
        alertDialog.dismiss()
    });

})