//HOMEPAGE 
function homePage() {
    this.heroTitle = 'Global Leaders in Software Quality Engineering';
    this.url = 'https://www.olenick.com/';
    this.title = 'Olenick: Global Leaders in Software Testing and Quality Engineering';
}

//SUBPAGES
function subPages() {
    homePage.call(this);
  }
  homePage.prototype = Object.create(subPages.prototype);
  homePage.prototype.constructor = homePage;

//IT PROJECTS
function itProjects() {
    subPages.call(this);
    this.heroTitle = 'IT Projects';
    this.url = 'https://www.olenick.com/service-categories/it-projects/';
    this.title = 'IT Projects - Olenick Service Pillars';
 }
 itProjects.prototype = Object.create(subPages.prototype);
 itProjects.prototype.constructor = itProjects;

 //IT OPERATIONS
 function itOperations() {
    subPages.call(this);
    this.heroTitle = 'IT Operations';
    this.url = 'https://www.olenick.com/service-categories/it-operations/';
    this.title = 'IT Operations - Olenick Service Pillars';
 }
 itOperations.prototype = Object.create(subPages.prototype);
 itOperations.prototype.constructor = itOperations;

 //IT GOVERNANCE
 function itGovernance() {
    subPages.call(this);
    this.heroTitle = 'IT Governance';
    this.url = 'https://www.olenick.com/service-categories/it-governance/';
    this.title = 'IT Governance - Olenick Service Pillars';
 }
 itGovernance.prototype = Object.create(subPages.prototype);
 itGovernance.prototype.constructor = itGovernance;

//NEWS
function news() {
    subPages.call(this);
    this.heroTitle = 'News';
    this.url = 'https://www.olenick.com/news/';
    this.title = 'Company News and Announcements - Olenick';
 }
 news.prototype = Object.create(subPages.prototype);
 news.prototype.constructor = news;

//OUR EXPERTISE
function expertise() {
    subPages.call(this);
    this.heroTitle = 'Our Expertise';
    this.url = 'https://www.olenick.com/blog/';
    this.title = 'Olenick Insights and Experience - Explore Our Blog and More';
 }
 expertise.prototype = Object.create(subPages.prototype);
 expertise.prototype.constructor = expertise;

//ABOUT US
function aboutUs() {
    subPages.call(this);
    this.heroTitle = 'About Olenick';
    this.url = 'https://www.olenick.com/about-us/';
    this.title = 'About Olenick: Over 20 Years of Experience in Software Testing and QA';
 }
 aboutUs.prototype = Object.create(subPages.prototype);
 aboutUs.prototype.constructor = aboutUs;