class dashboardPage{
    selectorsList(){
        const dashBoard = {
            
            dashboardGrid: ".orangehrm-dashboard-grid",
            myinfoButton: '[href="/web/index.php/pim/viewMyDetails"]'
        
        }

        return dashBoard

    }

    checkdashBoardPage(){

        cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
        cy.get(this.selectorsList().dashboardGrid).should('be.visible')
        cy.get(this.selectorsList().myinfoButton).click()
        //cy.get(selectorsList.dashboardGrid)

    }

}
export default dashboardPage