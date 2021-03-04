import Subpage from './Subpage';

class ItOperationsPage extends Subpage {
    constructor(webdriver){  
        super (webdriver, 'https://www.olenick.com/service-categories/it-operations/', 
        'IT Operations - Olenick Service Pillars', 'IT Operations');
    }
    get heroTitle() { throw new Error('Hero title not implemented. This method is abstract'); }
}