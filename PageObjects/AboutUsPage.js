import Subpage from './Subpage';

class AboutUsPage extends Subpage {
    constructor(webdriver){
                super (webdriver, 'https://www.olenick.com/about-us/', 
        'About Olenick: Over 20 Years of Experience in Software Testing and QA', 'About Olenick');  
    }
    get heroTitle() { throw new Error('Hero title not implemented. This method is abstract'); }
}