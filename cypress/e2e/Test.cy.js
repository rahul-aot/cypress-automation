describe(' launch application ', () => {

    it('launch test application', () => {

        cy.visit('https://www.saucedemo.com/')
        cy.url().should('eq', 'https://www.saucedemo.com/')
        cy.title().should('eq', 'Swag Labs')
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
    })
})