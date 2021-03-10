export default class Page {
    constructor(driver, url, title, heroTitle){
      this.driver = driver ;  
      this._url = url;
      this._heroTitle = heroTitle;
      this._title = title;   
    }
   // get url() { return url }
  //  get title() { return $('title') }

    //ERROR MESSAGE IF HERO TITLE IS NOT FOUND
    get heroTitle() { throw new Error('Hero title not implemented. This method is abstract'); }

  open(){
        this.driver.get (this._url); 
    }

    async isOpen () {
      const titlePromise = this.driver.getTitle();
      const urlPromise =  this.driver.getCurrentUrl();
      assert.strictEqual(await titlePromise, this._title);
      assert.strictEqual(await urlPromise, this._url);

      return this._url === urlPromise 
       && this._heroTitle === await this.driver.findElement({id: 'menu-main-menu'})
       && this._title === titlePromise;
    }

}

