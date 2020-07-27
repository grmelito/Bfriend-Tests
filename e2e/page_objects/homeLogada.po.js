const { browser, element, ExpectedConditions } = require('protractor')
const protractorHelper = require("protractor-helper");

class HomeLogada {
    constructor() {
        this.cidade = element(by.id('cidade'))
        this.bairro = element(by.id('Bairro'))
        this.categoria = element(by.id('categoria'))
        this.buscarButton = element(by.buttonText('Buscar'))
        this.perfilButton = element(by.buttonText('Perfil'))
        this.sairButton = element(by.buttonText('Sair'))
        this.saibamaisButton = element(by.buttonText('Saiba mais'))
        this.fornecedorButton = element(by.buttonText('Vire Fornecedor'))
        this.sectionCards = element(by.id('card-Reparos')).element(by.css('.container-cards'))
    };

    buscarAnuncio(bairro) {
        protractorHelper.hoverAndClick(this.cidade)
        browser.sleep(1000)
        this.cidade.sendKeys('Santos')
        //const cidadeEscolhida = this.cidade.element(by.css('option[value="Santos"]'))
        //protractorHelper.hoverAndClick(cidadeEscolhida);
        this.bairro.sendKeys(bairro);
        protractorHelper.hoverAndClick(this.categoria)
        browser.sleep(1000)
        this.categoria.sendKeys('Artesanato')
        this.buscarButton.click();
    };

    clicarNoAnuncio() {
        this.saibamaisButton.click()
    };

    entrarNoPerfil() {
        this.perfilButton.click()
    };

    sairDaConta() {
        this.sairButton.click()
    };
}

module.exports = new HomeLogada();