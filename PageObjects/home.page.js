import Page from './Page';

export default class HomePage extends Page {
    constructor(webdriver){
        super (webdriver);
            this.heroTitle = 'Global Leaders in Software Quality Engineering';
            this.url = 'https://www.olenick.com/';
            this.title = 'Olenick: Global Leaders in Software Testing and Quality Engineering';       
    }

    get heroTitle() { return $('.fl-heading-text') }
  //  get headerLinks() { return $('#menu-main-menu a ') }

    /*open() {
        super.open('home')
    }

    submit() {
        this.submitBtn.click()
    }
*/
}
