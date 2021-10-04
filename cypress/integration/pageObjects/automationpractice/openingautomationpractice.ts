import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { actionsA } from './actions';
import { assertionA } from './assertion';


const actions1 = new actionsA();
const assertion = new assertionA();

Given(`I open automationpractice page`, () => {
    actions1.automationpracticepage();
});
Then('{string} should be shown on URL', (content) => {
    assertion.should_be_shown_URL(content);
});
When('I click on Women T-shirts', () => {
    actions1.clickOnT_Shirts();
});
Then('{string} should be shown on URL', (content) => {
    assertion.should_be_shown_URL(content);
});
When('I Click on more for product', () => {
    actions1.clickOnMore();
});
Then('{string} should be shown on URL', (content) => {
    assertion.should_be_shown_URL(content);
});
When('I select Color Blue', () => {
    actions1.selectColorBlue();
});
When('I select Quantity 3', () => {
    actions1.selectQuantity3();
});
When('I select Size M', () => {
    actions1.selectSizeM();
});
When('I click on Add to cart', () => {
    actions1.addToCart();
});
Then('should be shown Color Blue And Size M', () => {
    assertion.shownColorAndSize();
});

Then('should be shown Quantity 3', () => {
    actions1.shownQuantity();
});
Then('should be shown Total $49.53', () => {
    assertion.shownTotal();
});

When('I click on Proceed to checkout[shopping cart]', () => {
    actions1.clickOnProceedToCheckout();
});
Then('{string} should be shown ', (content) => {
    assertion.shouldBeShown(content);
});
When('I click on Proceed to checkout[Shopping-cart summary]', () => {
    actions1.clickOnProceedToCheckoutShoppingCart();
});
Then('{string} should be shown ', (content) => {
    assertion.shouldBeShown(content);
});
When('I fill valid Email', () => {
    actions1.Enter_Email();
});
When('I fill valid password', () => {
    actions1.Enter_password();
});
When('I click on Sign in', () => {
    actions1.clickOnSignin();
});
Then('{string} should be shown ', (content) => {
    assertion.shouldBeShown(content);
});
When('I click on Proceed to checkout[Addresses]', () => {
    actions1.clickOnProceedToCheckoutAddresses();
});
Then('should be shown Shipping', (content) => {
    assertion.shouldBeShownShipping();
});
When('I click on Proceed to checkout[Shipping]', () => {
    actions1.clickOnProceedToCheckoutShipping();
});
Then('{string} should be shown', (content) => {
    assertion.shouldBeShown(content);
});
When('I click on Pay by check', () => {
    actions1.clickOnPayByCheck();
});
Then('should be shown Check payment', () => {
    assertion.shownCheckPayment();
});
When('I click on  I confirm my order', () => {
    actions1.clickOnIConfirmMyOrder();
});
Then('{string} should be shown', (content) => {
    assertion.shouldBeShown(content);
});