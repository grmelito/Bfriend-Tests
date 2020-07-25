const {browser, element } = require('protractor')
const Login = require('../page_objects/login.po');
const { protractor } = require('protractor/built/ptor');

describe('Login da aplicação', () => {
    
    it('Fazer login', () => {
        browser.waitForAngularEnabled(false)
        browser.get('http://localhost:3000/login');

        Login.realizarLogin('GabrielRuiz@gmail.com', 'Gabriel123')

        browser.sleep(1000)
        expect(browser.getCurrentUrl()).toEqual('http://localhost:3000/homeLogada');
    })
})