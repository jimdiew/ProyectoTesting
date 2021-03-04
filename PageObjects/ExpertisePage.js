import Subpage from './Subpage';

class ExpertisePage extends Subpage {
    constructor(webdriver){
       super (webdriver, 'https://www.olenick.com/blog/', 
        'Olenick Insights and Experience - Explore Our Blog and More', 'Our Expertise');
    }
    get heroTitle() { throw new Error('Hero title not implemented. This method is abstract'); }
}