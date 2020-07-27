const { browser, element, ExpectedConditions } = require('protractor')
const protractorHelper = require("protractor-helper");
const path = require("path");

class CadastroLoja {
    constructor() {
        this.titulo = element(by.id('Titulo'))
        this.facebook = element(by.id('Facebook'))
        this.instagram = element(by.id('Instagram'))
        this.site = element(by.id('Site'))
        this.descricao = element(by.id('Descricao'))
        this.telefone = element(by.id('Telefone'))
        this.categoria = element(by.id('categoria'))
        this.imagesInput = element(by.id('AnuncioImages'))
        this.cadastrarButton = element(by.buttonText('Cadastrar'))
         
    };

    cadastrarAnuncio(titulo, facebook, instagram, site, descricao, telefone) {
        const filesToUpload = "../assets/Bike1.jpg";
        const filesAbsolutePath = path.resolve(__dirname,filesToUpload);
        this.titulo.sendKeys(titulo);
        this.facebook.sendKeys(facebook);
        this.instagram.sendKeys(instagram);
        this.site.sendKeys(site);
        this.descricao.sendKeys(descricao);
        this.telefone.sendKeys(telefone);
        protractorHelper.hoverAndClick(this.categoria);
        browser.sleep(1000);
        this.categoria.sendKeys('Alimentação');
        this.imagesInput.sendKeys(filesAbsolutePath);
        browser.sleep(1000)
        this.cadastrarButton.click();
    };
}

module.exports = new CadastroLoja();