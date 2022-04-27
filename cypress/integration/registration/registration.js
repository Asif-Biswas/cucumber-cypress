import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

function makeEmail() {
    var strValues = "abcdefg12345";
    var strEmail = "";
    var strTmp;
    for (var i = 0; i < 10; i++) {
        strTmp = strValues.charAt(Math.round(strValues.length * Math.random()));
        strEmail = strEmail + strTmp;
    }
    strTmp = "";
    strEmail = strEmail + "@";
    for (var j = 0; j < 8; j++) {
        strTmp = strValues.charAt(Math.round(strValues.length * Math.random()));
        strEmail = strEmail + strTmp;
    }
    strEmail = strEmail + ".com"
    return strEmail;
}

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

And("user click the Create Account button", (string) => {
    cy.get('#nav-profile-tab').click();
});

When("the user fill in the form with the following information and submit", (datatable) => {
    // user fill in the form with the following information
    datatable.hashes().forEach(row => {
        cy.get('#x_first_name').type(row.firstname);
        cy.get('#x_last_name').type(row.lastname);
        cy.get('#email').type(makeEmail());
        cy.get('#password').type(row.password);
        cy.get('#phone').type(row.phone);
        
        cy.get('#btn-signup').click();
        cy.wait(15000)
    });
});

Then("the user should be redirected to the homepage with the text {string}", (content) => {
    cy.contains(content);
});