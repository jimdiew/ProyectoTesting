import Subpage from './Subpage';

class AboutUsPage extends Subpage {
    constructor(webdriver){
                super (webdriver, 'https://www.olenick.com/about-us/', title, heroTitle);  
    }
}