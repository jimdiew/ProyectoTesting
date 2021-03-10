import Subpage from './Subpage';

class ItOperationsPage extends Subpage {
    constructor(webdriver){  
        super (webdriver, 'https://www.olenick.com/service-categories/it-operations/', title, heroTitle);  
    }

}