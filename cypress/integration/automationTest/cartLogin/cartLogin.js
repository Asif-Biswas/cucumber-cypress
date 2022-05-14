import { Given, When, Then, And, Scenario } from "cypress-cucumber-preprocessor/steps";

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})


Given("I visit the url http://console-dev.cart.com", () => {
    cy.visit("http://console-dev.cart.com");
});
Then("I should see the text Welcome to Cart.com", () => {
    cy.contains("Welcome to Cart.com")
});