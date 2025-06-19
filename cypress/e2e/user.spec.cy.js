import userDate from '../fixtures/user-data.json'
import LoginPage from '../pages/loginPage.js'
import DashBoardPage from '../pages/dashBoard.js'

const loginPage = new LoginPage()
const dashBoard = new DashBoardPage()

describe('Orange HRM Tests', () => {

const selectorsList = {

  sectiontitleTopBar: ".oxd-topbar-header-breadcrumb-module",
  //dashboardGrid: ".orangehrm-dashboard-grid",
  //myinfoButton: '[href="/web/index.php/pim/viewMyDetails"]'

}

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


  it.only('User Info Update - Success', () => {

    loginPage.acessLoginPage()
    loginPage.loginWithAnyUser(userDate.userSuccess.username, userDate.userSuccess.password)
    dashBoard.checkdashBoardPage()
    

    //cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    //cy.get(selectorsList.dashboardGrid)
    //cy.get(selectorsList.myinfoButton).click()
    cy.get(myinfoList.mynameFirst).clear().type("vinicius")
    cy.get(myinfoList.mynameMiddle).clear().type("Roberto")
    cy.get(myinfoList.mynameLast).clear().type("Sincariuc")
    cy.get(myinfoList.mygenericFild).eq(3).clear().type('Sky')
    cy.get(myinfoList.mygenericFild).eq(4).clear().type("User1")
    cy.get(myinfoList.mygenericFild).eq(5).clear().type("12345678")
    cy.get(myinfoList.mydatepalceHolder).eq(0).clear().type("2031-22-04")
    cy.get(myinfoList.mycloseButton).click()
    cy.get(myinfoList.myboxselectorGeneric).eq(0).click()
    cy.contains('.oxd-select-option','Brazilian').scrollIntoView().should('be.visible').click()
    cy.get(myinfoList.myboxselectorGeneric).eq(1).click()
    cy.contains('.oxd-select-option','Single').should('be.visible').click()
    cy.get(myinfoList.mydatepalceHolder).eq(1).clear().type("1996-08-12")
    cy.get(myinfoList.mycloseButton).click()
    cy.get(myinfoList.myGender).eq(0).click()

    cy.get(myinfoList.mybuttonSucces).eq(0).click({ force: true })
    cy.get('body').should('contain', 'Successfully Updated')
    cy.get('.oxd-toast-close')

    cy.get(myinfoList.myboxselectorGeneric).eq(2).click()
    cy.contains('.oxd-select-option',"O+").should('be.visible').click()
    cy.get(myinfoList.myOptions).clear().type('2255')

    cy.get(myinfoList.mybuttonSucces).eq(1).click({ force: true })
    cy.get('body').should('contain', 'Successfully Updated')
    cy.get('.oxd-toast-close')

    
  })

    it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userDate.userFail.username)
    cy.get(selectorsList.passwordField).type(userDate.userFail.password)
    cy.get(selectorsList.loginbutton).click()
    cy.get(selectorsList.wrongcredentialAlert)
   })
})
