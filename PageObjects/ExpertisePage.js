import Subpage from './Subpage';

class ExpertisePage extends Subpage {
    constructor(webdriver){
       super (webdriver, 'https://www.olenick.com/blog/', title, heroTitle);  
    }

}