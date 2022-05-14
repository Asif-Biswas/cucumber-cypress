import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";


Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})



Given("a web browser is at the {string} page", (url) => {
    cy.visit(url);
});

When("the user click the dropdown menu item", () => {
    cy.get('.navbar__teleporter')
    cy.get('.teleporter__toggle').click()
});

And("hover the {string} link", (link) => {
    cy.get('.teleporter__list').contains(link).trigger('mouseover')
});

And("click {string} link", (link) => {
    cy.get('.teleporter__group__list').contains(link).click({ force: true })
});


Then("a page with {string} appears", (content) => {
    cy.contains(content);
});