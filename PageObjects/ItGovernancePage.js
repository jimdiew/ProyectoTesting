import Subpage from './Subpage';

class ItGovernancePage extends Subpage {
    constructor(webdriver){
        super (webdriver, 'https://www.olenick.com/service-categories/it-governance/', title, heroTitle);  
    }

}