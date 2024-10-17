describe('XPath Locators', () => {

    it('launch test application', () => {

        cy.visit('https://aiscribe.quipohealth.com/')
        cy.xpath("//div[@class='actionContainerSub']//button").should('have.length', 4)
    })
    it('launch image test application', () => {

        cy.visit('https://aiscribe.quipohealth.com/')
        cy.xpath("//div[@class='mainContainer collapsed']//img").should('have.length', 12)
    })
})