const { browser, element } = require('protractor')
const protractorHelper = require("protractor-helper");
const path = require('path')

class Perfil {
    constructor() {
        this.nome = element(by.id('inputEmail4'))
        this.genero = element(by.id('inputGenero'))
        this.cep = element(by.id('inputCep'))
        this.endereco = element(by.id('inputEndereco'))
        this.numero = element(by.id('inputNumero'))
        this.complemento = element(by.id('inputComplemento'))
        this.bairro = element(by.id('inputBairro'))
        this.imagemInput = element(by.id('profileImage'))
        this.alterarImgButton = element(by.buttonText('Alterar Dados'))
        this.editarLojaButton = element(by.buttonText('Editar Loja'))
        this.alterarDadosButton = element(by.buttonText('Atualizar Perfil'))
    };

    trocarImagem(){
        const profilePic = "../assets/EY-PFP.jpg";
        const profilePicAbsolutePath = path.resolve(__dirname,profilePic);

        this.imagemInput.sendKeys(profilePicAbsolutePath)
        browser.sleep(1000)
        this.alterarImgButton.click()
    };

    atualizarDados(nome, genero, cep, endereco, numero, complemento, bairro){
        this.nome.sendKeys(nome)
        this.genero.sendKeys(genero)
        this.cep.sendKeys(cep)
        this.endereco.sendKeys(endereco)
        this.numero.sendKeys(numero)
        this.complemento.sendKeys(complemento)
        this.bairro.sendKeys(bairro)
        
        browser.sleep(1000)
        this.alterarDadosButton.click()
    };
};

module.exports = new Perfil();