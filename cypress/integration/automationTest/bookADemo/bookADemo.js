import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";


Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})

const url = "https://www.cart.com/contact/sales";


Given("a web browser is at the Book a chat page", () => {
    cy.visit(url);
});

When("the user fill in the form with the following information and submit", (datatable) => {
    // user fill in the form with the following information
    datatable.hashes().forEach(row => {
        cy.get('#First').type(row.firstname);
        cy.get('#Last-name').type(row.lastname);
        cy.get('#Phone').type(row.phone);
        cy.get('#Email').type(row.email);
        cy.get('#country').select(row.country);
        cy.get('#Zipcode').type(row.zip);
        cy.get('#Storefront').check({ force: true });
        cy.get('#Message').type(row.message);
        cy.get('#Acknowledgement').check({ force: true });
        
        cy.get('#w-node-_48836080-8936-8795-fc97-6390d3339ee2-caee1e12 > input').click();
    });
});

Then("the user should be see the page with {string}", (content) => {
    cy.contains(content);
});