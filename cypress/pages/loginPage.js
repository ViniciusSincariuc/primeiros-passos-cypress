class loginPage {
    selectorsList(){
        const selectors = {
            usernameField: "[placeholder='Username']",
            passwordField: "[name='password']",
            loginButton: "[type='submit'",
            wrongcredentialAlert:"[role='alert']",
        }

            return selectors
    }

    acessLoginPage() {
        cy.visit('/auth/login')
    }
    
    loginWithAnyUser(username, password) {
        cy.get(this.selectorsList().usernameField, { timeout: 10000 }).type(username)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().loginButton).click()
    }

    checkAcessInvalid(){
         cy.get(this.selectorsList().wrongcredentialAlert)
    }
}

export default loginPage
