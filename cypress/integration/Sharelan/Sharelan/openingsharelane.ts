import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { actionsA } from './actions';

const actions1 = new actionsA();

Given(`I open sharelane page`, () => {
    actions1.sharelanepage();
});
When('I click on Test Portal', () => {
    actions1.Test_Portal_page();
});
Then('{string} should be shown', (content) => {
    actions1.should_be_shown(content);
});
When('I click on Account Creator', () => {
    actions1.Account_Creator();
});
Then('{string} should be shown', (content) => {
    actions1.should_be_shown(content);
});
When('I click on Create new user account', () => {
    actions1.Create_new_user_account();
});
Then('{string} should be shown', (content) => {
    actions1.should_be_shown(content);
});
When('I click on user account', () => {
    actions1.user_account();
});
When('I open sharelane page', () => {
   
    actions1.sharelanepage();
});
Then('{string} should be shown', (content) => {
    actions1.should_be_shown(content);
});
When('I fill in valid Email', () => {
    actions1.emailAddress();
    });

When('I fill in valid password', () => {
    actions1.password();
});
When('I click on Login', () => {
    actions1.Login();
});
Then('{string} should be shown', (content) => {
    actions1.should_be_shown(content);
});
When('enter expectations into text box "Search"', () => {
    actions1.enter_expectations();
});
When('I click on Search', () => {
    actions1.Search();
});
Then('{string} should be shown', (content) => {
    actions1.should_be_shown(content);
});
When('I click on add to cart', () => {
    actions1.add_to_cart();
});
Then('{string} should be shown', (content) => {
    actions1.should_be_shown(content)
});
When('I click on Test Portal', () => {
    actions1.Test_Portal_page();
});
Then('{string} should be shown', (content) => {
    actions1.should_be_shown(content)
});
When('I click on Credit Card Generator', () => {
    actions1.Credit_Card_Generator()
});
Then('{string} should be shown', (content) => {
    actions1.should_be_shown(content)
});
When('select  Visa', () => {
    actions1.select_Visa()
});
Then('{string} should be shown', (content) => {
    actions1.should_be_shown(content)
});
When('I click on Generate Credit Card', () => {
    actions1.Generate_Credit_Card()
});
Then('{string} should be shown', (content) => {
    actions1.should_be_shown(content)
});
When('I copy card number', () => {
    
    actions1.card_number()
});
When('I open main_sharelane page', () => {
    actions1.sharelanepage();
});
Then('{string} should be shown', (content) => {
    actions1.should_be_shown(content)
});
When('I click on Shopping Cart', () => {
    actions1.Shopping()
});
Then('{string} should be shown', (content) => {
    actions1.should_be_shown(content)
});
When('I click on Proceed to Checkout', () => {
    actions1.Proceed_to_Checkout()
});
Then('{string} should be shown', (content) => {
    actions1.should_be_shown(content)
});
When('select  Visa from drop down menu "card type"', () => {
    actions1.select_Visa_from_drop_down_menu()
});

When('paste card number into text box "card number "', () => {

    actions1.paste_card_number()
});
When('I click on  Make Payment', () => {

    actions1.Make_Payment()
});
Then('{string} should be shown', (content) => {
    actions1.should_be_shown(content);
});
When('copy order id', () => {
    actions1.copy_order_id();
    });
When('I click on Test Portal', () => {
    actions1.Test_Portal_page()
});
Then('{string} should be shown', (content) => {
    actions1.should_be_shown(content);
});
When('I click on DB Connect Utility', () => {
    actions1.DB_Connect_Utility();
});
Then('{string} should be shown', (content) => {
    actions1.should_be_shown(content);
});
When('enter orderId', () => {
    actions1.enter_order_Id();
});
When('I click on Query DB', () => {
    actions1.Query_DB();
});
Then('{string} should be shown', (content) => {
    actions1.should_be_shown(content);
});