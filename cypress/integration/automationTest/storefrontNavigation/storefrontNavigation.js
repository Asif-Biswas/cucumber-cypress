import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})


Given("a web browser is at the {string} page", (url) => {
    cy.visit(url);
});

When("the user click Features nav item", () => {
    cy.get('.navbar__dropdown ').click()
});

And("the user click {string} link", (link) => {
    cy.contains(link).click()
});

Then("a page with {string} appears", (content) => {
    cy.contains(content);
});



