import { Given, When, Then, And, Scenario } from "cypress-cucumber-preprocessor/steps";
Cypress.config('experimentalSessionSupport', true)
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})


Given("cart.com homepage", () => {
    // cy.visit("https://cart.com");
    // cy.contains('Sign in').click();
    // cy.wait(5000);
    // cy.get('#login-email').type('vecanon423@richdn.com');
    // cy.get('#login-password').type('@Testing11');
    // cy.get('#btn-login').click();
    // cy.wait(18000);
    // cy.contains('Welcome to Cart.com!');
    cy.login('vecanon423@richdn.com', '@Testing11');
    cy.visit('https://console.cart.com/')
    cy.wait(10000)
});

When("the user click the button Get Started in {string} card", (title)=> {
    // get the element with data-testid="homepage-feature-solutions" and get all the ul>li elements
    // cy.get('[data-testid="homepage-feature-solutions"]').within(() => {
        cy.get('ul>li').each(($el, index, $list) => {
            // get the text of h3 element
            const text = $el.find('h3').text();
            if (text === title) {
                // get the [data-testid="button"]') inside the li element and click it
                cy.wrap($el).find('[data-testid="button"]').click();
            }
        // })
    })
})

Then("a page with url {string} appears", (url) => {
    cy.url().should('include', url);
});