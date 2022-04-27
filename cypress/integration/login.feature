Feature: Login


Scenario: Fill in the form and submit
    Given a web browser is at the cart.com homepage
        And user click the signup button
        And user should be redirected to the signup page with the title "Welcome to Cart.com"
    When the user fill in the form with the following information and submit
        | email | password |
        | vecanon423@richdn.com | @Testing11 |
    Then the user should be redirected to the homepage with the title "Featured Solutions"

    