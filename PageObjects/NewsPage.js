import Subpage from './Subpage';

class NewsPage extends Subpage {
    constructor(webdriver){
        super (webdriver, 'https://www.olenick.com/news/', 
        'Company News and Announcements - Olenick', 'News');
           
    }
    get heroTitle() { throw new Error('Hero title not implemented. This method is abstract'); }
}