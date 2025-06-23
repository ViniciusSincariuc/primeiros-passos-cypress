class pageObjects {
    selectorsList(){
        const selectors = {
            mynameFirst: "[name='firstName']",
            mynameMiddle: "[name='middleName']",
            mynameLast: "[name='lastName']",
            mygenericFild: ".oxd-input--active",
            myboxselectorGeneric: ".oxd-select-text--active",
            mydatepalceHolder: "[placeholder='yyyy-dd-mm']",
            mycloseButton: ".--close",
            mybuttonSucces: "[type='submit']",
            myGender: ".oxd-radio-wrapper",
            myOptions: "[options='']"
        }
        return selectors
    }
        fillPersonalDetails(firstName, middleName, lastName){
            cy.get(this.selectorsList().mynameFirst).clear().type(firstName)
            cy.get(this.selectorsList().mynameMiddle).clear().type(middleName)
            cy.get(this.selectorsList().mynameLast).clear().type(lastName)
            }

        fillEmployeeDetails(employeeId, otherId, driverLicense, licenseDate){

            cy.get(this.selectorsList().mygenericFild).eq(3).clear().type(employeeId)
            cy.get(this.selectorsList().mygenericFild).eq(4).clear().type(otherId)
            cy.get(this.selectorsList().mygenericFild).eq(5).clear().type(driverLicense)
            cy.get(this.selectorsList().mydatepalceHolder).eq(0).clear().type(licenseDate)
            cy.get(this.selectorsList().mycloseButton).click()
            }

        fillStatus(country, marriedStatus, gender){

            cy.get(this.selectorsList().myboxselectorGeneric).eq(0).click()
            cy.contains('.oxd-select-option', country).scrollIntoView().should('be.visible').click()
            cy.get(this.selectorsList().myboxselectorGeneric).eq(1).click()
            cy.contains('.oxd-select-option', marriedStatus).should('be.visible').click()
            cy.get(this.selectorsList().mydatepalceHolder).eq(1).clear().type("1996-08-12")
            cy.get(this.selectorsList().mycloseButton).click()
            cy.contains(this.selectorsList().myGender, gender).click()
            
            }

        fillCustomDetails(bloodType, testFild){

            cy.get(this.selectorsList().myboxselectorGeneric).eq(2).click()
            cy.contains('.oxd-select-option', bloodType).should('be.visible').click()
            cy.get(this.selectorsList().myOptions).eq(4).clear().type(testFild)
            }

        saveForm1(){
            cy.get(this.selectorsList().mybuttonSucces).eq(0).click({ force: true })
            cy.get('body').should('contain', 'Successfully Updated')
            cy.get('.oxd-toast-close')
        }
        saveForm2(){
            cy.get(this.selectorsList().mybuttonSucces).eq(1).click({ force: true })
            cy.get('body').should('contain', 'Successfully Updated')
            cy.get('.oxd-toast-close')

        }


    }

        export default pageObjects