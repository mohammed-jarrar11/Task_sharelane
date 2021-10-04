export class assertionA {

    constructor() {

    }
    public should_be_shown_URL(content: string) {
        cy.wait(3000)
        cy.url().should('include', content)
    }

    public shownColorAndSize() {
        cy.get('div span').contains("Blue, M", { timeout: 10000 }).should('be.visible')
        cy.wait(3000)

    }

    public shownQuantity() {
        cy.get('div span').contains("3", { timeout: 10000 }).should('be.visible')
        cy.wait(3000)
    }

    public shownTotal() {
        cy.get('div ').contains("$49.53", { timeout: 10000 }).should('be.visible')
        cy.wait(3000)
    }

    public shouldBeShown(content: string) {
        cy.contains(content, { timeout: 10000 }).should('be.visible')
    }

    public shouldBeShownShipping() {
        cy.get('div h1').contains("Shipping", { timeout: 10000 }).should('be.visible')
    }

    public shownCheckPayment() {
        cy.get('form div h3').contains("Check payment", { timeout: 10000 }).should('be.visible')
    }
    

}