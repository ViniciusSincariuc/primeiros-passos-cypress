import userDate from '../fixtures/user-data.json'

describe('Orange HRM Tests', () => {

const selectorsList = {
  usernameField: "[name='username']",
  passwordField: "[name='password']",
  loginbutton: "[type='submit'",
  sectiontitleTopBar: ".oxd-topbar-header-breadcrumb-module",
  dashboardGrid: ".orangehrm-dashboard-grid",
  wrongcredentialAlert:"[role='alert']",
  myinfoButton: '[href="/web/index.php/pim/viewMyDetails"]'

}

const myinfoList = {
  mynameFirst: "[name='firstName']",
  mynameMiddle: "[name='middleName']",
  mynameLast: "[name='lastName']",
  nickName: ".oxd-input--active",
  employeeId: ".oxd-input--active",
  otherId: ".oxd-input--active",

}


  it.only('User Info Update - Success', () => {

    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userDate.userSuccess.username)
    cy.get(selectorsList.passwordField).type(userDate.userSuccess.password)
    cy.get(selectorsList.loginbutton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList.dashboardGrid)
    cy.get(selectorsList.myinfoButton).click()
    cy.get(myinfoList.mynameFirst).clear().type("vinicius")
    cy.get(myinfoList.mynameMiddle).clear().type("Roberto")
    cy.get(myinfoList.mynameLast).clear().type("Sincariuc")
    cy.get(myinfoList.nickName).eq(4).clear().type('Sky')
    cy.get(myinfoList.employeeId).eq(5).clear().type("User1")
    cy.get(myinfoList.otherId).eq(6).clear().type("12345678")
    
  })

    it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userDate.userFail.username)
    cy.get(selectorsList.passwordField).type(userDate.userFail.password)
    cy.get(selectorsList.loginbutton).click()
    cy.get(selectorsList.wrongcredentialAlert)
   })
})
