const { browser, element } = require('protractor')
const protractorHelper = require("protractor-helper");

class Fornecedor {
    constructor() {
        this.cpf = element(by.id('inputCPF'))
        this.cep = element(by.id('inputCep'))
        this.cidade = element(by.id('cidade'))
        this.endereco = element(by.id('inputEndereco'))
        this.numero = element(by.id('inputNumero'))
        this.complemento = element(by.id('inputComplemento'))
        this.bairro = element(by.id('inputBairro'))
        this.confimarDados = element(by.buttonText('Confirmar Dados'))
        
    };

    virarFornecedor(cpf, cep, endereco, numero, complemento, bairro) {
        this.cpf.sendKeys(cpf);
        this.cep.sendKeys(cep);
        protractorHelper.hoverAndClick(this.cidade)
        browser.sleep(1000)
        this.cidade.sendKeys('São Paulo')
        this.endereco.sendKeys(endereco);
        this.numero.sendKeys(numero);
        this.complemento.sendKeys(complemento);
        this.bairro.sendKeys(bairro);
        this.confimarDados.click();
    };
}

module.exports = new Fornecedor();