class menuPage {
    selectorList(){
        const pageMenu = {

            myinfoButton: '[href="/web/index.php/pim/viewMyDetails"]'

        }
        return pageMenu
    }
    menuPage(){

        cy.get(this.selectorList().myinfoButton).click()
    }
}

        export default menuPage