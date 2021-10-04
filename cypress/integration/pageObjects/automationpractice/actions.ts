
export class actionsA {

    constructor() {

    }
    public automationpracticepage() {
        cy.wait(3000)
        cy.visit("http://automationpractice.com/index.php");
        cy.wait(6000)
        
    }
    
    public clickOnT_Shirts() {
        cy.contains('Women').rightclick()
        cy.contains('T-shirts').click();
        cy.wait(3000)
}
    public clickOnMore() {
        cy.contains('More').click();
        cy.wait(3000)
    }
    public selectColorBlue() {
        cy.get('ul li a[id="color_14"]').click()
       
    }
    
    public selectQuantity3() {
        cy.get('.icon-plus').click()
        cy.get('.icon-plus').click()
    }
   
    public selectSizeM() {
        cy.get('select').select('M').should('have.value', '2')
    }
    
    public addToCart() {
        cy.contains('Add to cart').click();
    }
   
    public shownQuantity() {
        cy.get('div span').contains("3", { timeout: 10000 }).should('be.visible')
        cy.wait(3000)
    }
   
  
    public clickOnProceedToCheckout() {
        cy.wait(3000)
        cy.contains('Proceed to checkout').click();
    }
   
    public clickOnProceedToCheckoutShoppingCart() {
        cy.wait(3000)
        cy.get('p a span').contains('Proceed to checkout').click();
    }
    public Enter_Email() {
        cy.wait(3000)
        cy.get('input[id="email"]').type('test.jarrar2022@gmail.com')
    }
    public Enter_password() {
        cy.wait(3000)
        cy.get('input[id="passwd"]').type('1234@1234')
    }
    
    public clickOnSignin() {
        cy.wait(3000)
        cy.get('p button span').contains('Sign in').click();
    }
    public clickOnProceedToCheckoutAddresses() {
        cy.wait(3000)
        cy.get('p button span').contains('Proceed to checkout').click();
    }
   
    public clickOnProceedToCheckoutShipping() {
        cy.get('form').contains('p', 'I agree to the terms of service and will adhere to them unconditionally.').find('input').click();

        cy.get('p button span').contains('Proceed to checkout').click();
    }
    public clickOnPayByCheck() {
        cy.contains('Pay by check').click();
    }
    
   public clickOnIConfirmMyOrder() {
        cy.contains(' I confirm my order').click();
    }
    
   



}