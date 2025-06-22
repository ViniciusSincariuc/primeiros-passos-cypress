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

  it('User Info Update - Success', () => {

    loginPage.acessLoginPage()
    loginPage.loginWithAnyUser(userDate.userSuccess.username, userDate.userSuccess.password)

    dashBoard.checkdashBoardPage()

    pageMenu.menuPage()

    pageObjects.fillPersonalDetails('Vinicius', 'Roberto', 'Sincariuc')
    pageObjects.fillEmployeeDetails('ViUser', "1234", "drive123", "2031-22-09")
    pageObjects.fillStatus('Brazilian', 'Single', 'Female')
    pageObjects.saveForm1()
    pageObjects.fillCustomDetails("O+", "2255")
    pageObjects.saveForm2()
    
  })

})
