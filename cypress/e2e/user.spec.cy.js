import userDate from '../fixtures/user-data.json'
import LoginPage from '../pages/loginPage.js'
import DashBoardPage from '../pages/dashBoard.js'
import MenuPage from '../pages/menuPage.js'
import PageObjects from '../pages/pageObjects.js'


const loginPage = new LoginPage()
const dashBoard = new DashBoardPage()
const pageMenu = new MenuPage()
const pageObjects = new PageObjects()

describe('Orange HRM Tests', () => {

  it.only('User Info Update - Success', () => {

    loginPage.acessLoginPage()
    loginPage.loginWithAnyUser(userDate.userSuccess.username, userDate.userSuccess.password)
    dashBoard.checkdashBoardPage()
    pageMenu.menuPage()
    pageObjects.myobjectsInfo()
    
  })

    it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userDate.userFail.username)
    cy.get(selectorsList.passwordField).type(userDate.userFail.password)
    cy.get(selectorsList.loginbutton).click()
    cy.get(selectorsList.wrongcredentialAlert)
    
   })
})
