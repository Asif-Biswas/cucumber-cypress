Feature: Registration


Scenario: Fill in the form and submit
    Given a web browser is at the cart.com homepage
        And user click the signup button
        And user should be redirected to the signup page with the title "Welcome to Cart.com"
        And user click the Create Account button
    When the user fill in the form with the following information and submit
        | firstname | lastname | password | phone |
        | John      | Doe      | @Testing11   | 1234567890 |
    Then the user should be redirected to the homepage with the text "Organization"

    