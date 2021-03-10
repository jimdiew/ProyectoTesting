import Subpage from './Subpage';

class NewsPage extends Subpage {
    constructor(webdriver){
        super (webdriver, 'https://www.olenick.com/news/', title, heroTitle);  
    }

}