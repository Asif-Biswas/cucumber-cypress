import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";


Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

const url = "https://cart.com";


Given("a web browser is at the cart.com homepage", () => {
    cy.visit(url);
});

And("user click the signup button", () => {
    cy.contains('Sign in').click();
});

And("user should be redirected to the signup page with the title {string}", (string) => {
    cy.contains(string)
});

And("the user fill in the form with the following information and submit", (datatable) => {
    // user fill in the form with the following information
    datatable.hashes().forEach(row => {
        cy.get('#login-email').type(row.email);
        cy.get('#login-password').type(row.password);
        
        cy.get('#btn-login').click();
    });
});

And("the user should be redirected to the homepage with the title {string}", (content) => {
    cy.contains(content);
});

When("the user click the signout button", () => {
    cy.wait(8000);
    cy.get('header > div').eq(2).within(() => {
        cy.get('div > button').click();
        cy.contains('Sign Out').click();
    });
});

Then("the user should be redirected to the homepage with the title {string}", (content) => {
    cy.contains(content);
});




