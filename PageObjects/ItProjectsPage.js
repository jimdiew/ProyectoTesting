import Subpage from './Subpage';

class ItProjectsPage extends Subpage {
    constructor(webdriver, url, title, heroTitle){
        this.driver = webdriver;
        this.heroTitle = 'IT Projects';
        this.url = 'https://www.olenick.com/service-categories/it-projects/';
        this.title = 'IT Projects - Olenick Service Pillars';      
    }
    get heroTitle() { throw new Error('Hero title not implemented. This method is abstract'); }
}