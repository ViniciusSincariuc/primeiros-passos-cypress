class pageObjects {
    selectorsList(){
        const myinfoList = {
            mynameFirst: "[name='firstName']",
            mynameMiddle: "[name='middleName']",
            mynameLast: "[name='lastName']",
            mygenericFild: ".oxd-input--active",
            myboxselectorGeneric: ".oxd-select-text--active",
            mydatepalceHolder: "[placeholder='yyyy-dd-mm']",
            mycloseButton: ".--close",
            mybuttonSucces: "[type='submit']",
            myGender: ".oxd-radio-input",
            myOptions: "[options='']"
        }
        return myinfoList
    }
        myobjectsInfo(){

            cy.get(this.selectorsList().mynameFirst).clear().type("Vinicius")
            cy.get(this.selectorsList().mynameMiddle).clear().type("Roberto")
            cy.get(this.selectorsList().mynameLast).clear().type("Sincariuc")
            cy.get(this.selectorsList().mygenericFild).eq(3).clear().type('Sky')
            cy.get(this.selectorsList().mygenericFild).eq(4).clear().type("User1")
            cy.get(this.selectorsList().mygenericFild).eq(5).clear().type("12345678")
            cy.get(this.selectorsList().mydatepalceHolder).eq(0).clear().type("2031-22-04")
            cy.get(this.selectorsList().mycloseButton).click()
            cy.get(this.selectorsList().myboxselectorGeneric).eq(0).click()
            cy.contains('.oxd-select-option','Brazilian').scrollIntoView().should('be.visible').click()
            cy.get(this.selectorsList().myboxselectorGeneric).eq(1).click()
            cy.contains('.oxd-select-option','Single').should('be.visible').click()
            cy.get(this.selectorsList().mydatepalceHolder).eq(1).clear().type("1996-08-12")
            cy.get(this.selectorsList().mycloseButton).click()
            cy.get(this.selectorsList().myGender).eq(0).click()

            cy.get(this.selectorsList().mybuttonSucces).eq(0).click({ force: true })
            cy.get('body').should('contain', 'Successfully Updated')
            cy.get('.oxd-toast-close')

            cy.get(this.selectorsList().myboxselectorGeneric).eq(2).click()
            cy.contains('.oxd-select-option',"O+").should('be.visible').click()
            cy.get(this.selectorsList().myOptions).clear().type('2255')

            cy.get(this.selectorsList().mybuttonSucces).eq(1).click({ force: true })
            cy.get('body').should('contain', 'Successfully Updated')
            cy.get('.oxd-toast-close')

        }

}

        export default pageObjects