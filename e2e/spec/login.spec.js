const Login = require('../page_objects/login.po');

describe('Login da aplicação', () => {
    
    it('Fazer login', () => {
        browser.waitForAngularEnabled(false)
        browser.get('http://localhost:3000/login');

        Login.realizarLogin('GabrielRuiz@gmail.com', 'Gabriel123')

        expect(driver.getCurrentUrl().toContain('/homeLogada'))
    })
})