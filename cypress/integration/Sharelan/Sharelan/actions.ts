 var emailAddress = " ";
 var number_card = " ";
var orderId = " ";
var url = "https://main.sharelane.com/cgi-bin/main.py";
export class actionsA {
    
    constructor() {
       
    }
    public sharelanepage() {
        cy.visit(url);
    }
    public Test_Portal_page() {
        cy.contains('Test Porta').click()
    }
    public should_be_shown(content: string) {
        cy.contains(content, { timeout: 10000 }).should('be.visible')
    }
    public Account_Creator() {
        cy.contains('Account Creator').click()
    }

    public Create_new_user_account() {
        cy.contains('Create new user account').click()
    }

    public user_account() {
        var emailAd = " ";
        var index = 2
        cy.get('table >tbody >tr td:nth-child(3)').each(($el, index, $list) => {
            emailAddress = $el.text()
            return emailAddress })
    }

    public emailAddress() {
        cy.get('input[name="email"]').type(emailAddress)
        cy.wait(3000);

    }


    public password() {
        cy.get('input[type = "password"]').type('1111')
        cy.wait(3000);
    }


    public Login() {
        cy.contains('Login').click()
    }
    public enter_expectations() {
        cy.get('input[name="keyword"]').type('expectations')
    }
    public Search() {
        cy.contains('Search').click()
    }

    public add_to_cart() {
        cy.get('img[src="../images/add_to_cart.gif"]').click()
    }

    public Credit_Card_Generator() {
        cy.contains('Credit Card Generator').click()
    }

    public select_Visa() {
        cy.get('select').select('Visa').should('have.value', '1')
    }

    public Generate_Credit_Card() {
        cy.contains('Generate Credit Card').click()
    }

    public card_number() {
        var index = 2
        cy.get('table >tbody >tr td:nth-child(2)').each(($el, index, $list) => {

            number_card = $el.text()

        })
    }

    public Shopping() {
        cy.contains('Shopping Cart').click()
    }

    public Proceed_to_Checkout() {
        cy.contains('Proceed to Checkout').click()
    }

    public select_Visa_from_drop_down_menu() {
        cy.get('select[name="card_type_id"]').select('Visa').should('have.value', '1')
    }

    public paste_card_number() {
        cy.get('table').contains('tr', 'Card Number:').find('input').type(number_card);
    }

    public Make_Payment() {
        cy.get('table tbody tr td').eq(45).click();
    }

    public copy_order_id() {
        var index = 2
        cy.get('table').contains('tr', 'Order id:').find('b').each(($el, index, $list) => {
            orderId = $el.text()

        })
    }
    public DB_Connect_Utility() {
        cy.contains('DB Connect Utility').click()
    }

    public enter_order_Id() {
        cy.get('input[type="text"]').type(orderId)
    }

    
    public Query_DB() {
        cy.get('input[type="submit"]').click()
    }
}