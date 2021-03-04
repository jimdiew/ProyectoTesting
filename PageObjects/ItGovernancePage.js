import Subpage from './Subpage';

class ItGovernancePage extends Subpage {
    constructor(webdriver){
        super (webdriver, 'https://www.olenick.com/service-categories/it-governance/', 
        'IT Governance - Olenick Service Pillars', 'IT Governance');
    }
    get heroTitle() { throw new Error('Hero title not implemented. This method is abstract'); }
}