import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";


Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})



Given("a web browser is at the {string} homepage", (url) => {
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

When("the user click the dropdown menu", () => {
    cy.get("body").then($body => {
        cy.wait(8000);
        if ($body.find(".css-ki3ndu").length > 0) {   
        //evaluates as true if button exists at all
            cy.get(".css-ki3ndu").then($header => {
              if ($header.is(':visible')){
                //you get here only if button EXISTS and is VISIBLE
                cy.get('.css-ki3ndu').click();
              } else {
                //you get here only if button EXISTS but is INVISIBLE
                cy.get('.css-7ty2sp').click();
              }
            });
        } else {
           //you get here if the button DOESN'T EXIST
           cy.get('button > svg').click();
        }
    });
});

And("click the {string} link", (link) => {
    cy.contains(link).click();
});

Then("the user should be redirected to the page with the title {string}", (title) => {
    cy.contains(title);

});