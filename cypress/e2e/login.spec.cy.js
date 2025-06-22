import userDate from '../fixtures/user-data.json'
import LoginPage from '../pages/loginPage.js'
import DashBoardPage from '../pages/dashBoard.js'
import MenuPage from '../pages/menuPage.js'
import PageObjects from '../pages/pageObjects.js'


const loginPage = new LoginPage()
const dashBoardPage = new DashBoardPage()

describe('Login Orange HRM Tests', () => {

        it('Login - Success', () => {
      loginPage.acessLoginPage()
      loginPage.loginWithAnyUser(userDate.userSuccess.username, userDate.userSuccess.password)
      dashBoardPage.checkdashBoardPage()

   })

    it('Login - Fail', () => {
      loginPage.acessLoginPage()
      loginPage.loginWithAnyUser(userDate.userFail.username, userDate.userFail.password)
      loginPage.checkAcessInvalid()

   })
})
