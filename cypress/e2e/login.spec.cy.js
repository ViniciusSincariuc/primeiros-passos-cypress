import userDate from '../fixtures/user-data.json'

describe('Orange HRM Tests', () => {

const selectorsList = {
  usernameField: "[name='username']",
  passwordField: "[name='password']",
  loginbutton: "[type='submit'",
  sectiontitleTopBar: ".oxd-topbar-header-breadcrumb-module",
  dashboardGrid: ".orangehrm-dashboard-grid",
  wrongcredentialAlert:"[role='alert']"

}

  it('Login - Success', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.usernameField).type(userDate.userSuccess.username)
    cy.get(selectorsList.passwordField).type(userDate.userSuccess.password)
    cy.get(selectorsList.loginbutton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList.dashboardGrid)
  })
    it('Login - Fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.usernameField).type(userDate.userFail.username)
    cy.get(selectorsList.passwordField).type(userDate.userFail.password)
    cy.get(selectorsList.loginbutton).click()
    cy.get(selectorsList.wrongcredentialAlert)
   })
})
