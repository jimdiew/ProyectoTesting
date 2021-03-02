// home.page.js
import Page from './page'

class HomePage extends Page {

    get heroTitle() { return $('.fl-heading-text') }
    get headerLinks() { return $('#menu-main-menu a ') }

    open() {
        super.open('home')
    }

    submit() {
        this.submitBtn.click()
    }

}

export default new HomePage()