import Page from './Page';

class Subpage extends Page {
    constructor(webdriver, url, title, heroTitle){
        super (webdriver, url, title, heroTitle);    
    }

    get heroTitle() { return $('.fl-heading-text') }
}