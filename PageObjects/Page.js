// Page.js
/*export default class Page {
    constructor() {
        this.title = 'My Page'
    }

    open(path) {
        browser.url(path)
    }
}*/

import { get } from "request";

export default class Page {
    constructor(driver, url, title, heroTitle){
      this.driver = driver ;  
      this.url = url;
      this.heroTitle = heroTitle;
      this.title = title;   
    }
    
    get heroTitle() { throw new Error('Hero title not implemented. This method is abstract'); }

  open(){
        this.driver.get (this.url); 
    }
}

