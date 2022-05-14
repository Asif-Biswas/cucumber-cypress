import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})


Given("a web browser is at the {string} page", (url) => {
    cy.visit(url);
});

When("the user click {string} button", (navItem) => {
    //cy.get('.footer')
    cy.contains(navItem).click({ force: true })
});

Then("a page with {string} appears", (content) => {
    cy.contains(content);
});



