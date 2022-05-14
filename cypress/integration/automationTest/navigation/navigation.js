import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

const url = "https://cart.com";


Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})


Given("a web browser is at the cart.com homepage", () => {
    cy.visit(url);
});

When("the user hover over the menu {string}", (navItem) => {
    cy.get('.menu__container')
    cy.contains(navItem).trigger('mouseover')
});

And("click {string} link", (link) => {
    cy.get('.menu__dropdown__list').contains(link).click({ force: true })
});

Then("a page with {string} appears", (content) => {
    cy.contains(content);
});



