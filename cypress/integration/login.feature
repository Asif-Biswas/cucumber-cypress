Feature: Login

# before each test
Background: Before Each
    Given a web browser is at the cart.com homepage
        And user click the signup button
        And user should be redirected to the signup page with the title "Welcome to Cart.com"


Scenario: Invalid email and password
    When I fill username with "invalid" and password with "invalid"
    And click the login button
    Then I see "Wrong email or password"
    

Scenario: Blank email field
    When I fill password with "@Testing11"
    And click the login button
    Then I see "Wrong email or password"
    

Scenario: Blank password field
    When I fill email with "vecanon423@richdn.com"
    And click the login button
    Then I see "Wrong email or password"


Scenario: Click forgot password link
    When I fill email with "vecanon423@richdn.com"
    And click the Forgot Password link
    Then I see "We've just sent you an email to reset your password"


Scenario: Click forgot password link with blank email
    And click the Forgot Password link
    Then I see "email or username are required"


Scenario: Click bottom Login link from Create Account page
    When I click "Create Account"
    And Click bottom Log in link
    Then I see Log In button exists


Scenario: Fill the login form with valid credintials and submit
    When the user fill in the form with the following information and submit
        | email | password |
        | vecanon423@richdn.com | @Testing11 |
    Then the user should be redirected to the homepage with the title "Featured Solutions"

    
