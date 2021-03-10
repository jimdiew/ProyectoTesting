import Subpage from './Subpage';

class ItProjectsPage extends Subpage {
    constructor(webdriver){  
        super (webdriver, 'https://www.olenick.com/service-categories/it-projects/', title, heroTitle);  
    }

}