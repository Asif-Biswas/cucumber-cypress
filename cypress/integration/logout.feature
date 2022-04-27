Feature: Logout


Scenario: Login first then logout
    Given a web browser is at the cart.com homepage
        And user click the signup button
        And user should be redirected to the signup page with the title "Welcome to Cart.com"
        And the user fill in the form with the following information and submit
            | email | password |
            | vecanon423@richdn.com | @Testing11 |
        And the user should be redirected to the homepage with the title "Welcome to Cart.com"

    When the user click the signout button
    Then the user should be redirected to the homepage with the title "Log In"

    