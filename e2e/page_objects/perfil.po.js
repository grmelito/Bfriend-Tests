const { browser, element } = require('protractor')
const protractorHelper = require("protractor-helper");
const path = require('path')

class Perfil {
    constructor() {
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
    }
};

module.exports = new Perfil();