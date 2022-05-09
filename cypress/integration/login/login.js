import { Given, When, Then, And, Scenario } from "cypress-cucumber-preprocessor/steps";


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

beforeEach(() => {
    Given("a web browser is at the cart.com homepage", () => {
        cy.visit(url);
    });
    And("user click the signup button", () => {
        cy.contains('Sign in').click();
    });
    And("user should be redirected to the signup page with the title {string}", (string) => {
        cy.wait(5000);
        cy.contains(string)
    });
})


When("the user fill in the form with the following information and submit", (datatable) => {
    // user fill in the form with the following information
    datatable.hashes().forEach(row => {
        cy.get('#login-email').type(row.email);
        cy.get('#login-password').type(row.password);
        
        cy.get('#btn-login').click();
    });
});
Then("the user should be redirected to the homepage with the title {string}", (content) => {
    cy.wait(18000);
    cy.contains(content);
});




When("I fill username with {string} and password with {string}", (email, password) => {
    cy.get('#login-email').type(email);
    cy.get('#login-password').type(password);
});

And("click the login button", () => {
    cy.get('#btn-login').click();
})


Then("I see {string}", (content) => {
    cy.contains(content);
});


When("I fill password with {string}", (password) => {
    cy.get('#login-password').type(password);
});

When("I fill email with {string}", (email) => {
    cy.get('#login-email').type(email);
});


And("click the Forgot Password link", () => {
    cy.get('#forgotPassword').click();
})


When("I click {string}", (string) => {
    cy.contains(string).click();
});

And("Click bottom Log in link", () => {
    cy.get('#signupForm > div.sales-form-submit > div.text-center > small').contains('Log in').click();
})

Then("I see Log In button exists", () => {
    cy.get('#btn-login').contains('Log In')
})