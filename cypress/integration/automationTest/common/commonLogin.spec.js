Cypress.Commands.add('login', (username, password) => {
    cy.session([username, password], () => {
      cy.visit('https://console.cart.com/login')
      cy.get('#login-email').type(username)
      cy.get('#login-password').type(password)
      cy.get('#btn-login').click()
      //cy.url().should('contain', '/login-successful')
      cy.wait(45000)
      cy.contains('Hi vec, Welcome to Cart.com!')
    })
})