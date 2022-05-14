Feature: Registration

# before each test
Background: Before Each
    Given a web browser is at the cart.com homepage
        And user click the signup button
        And user should be redirected to the signup page with the title "Welcome to Cart.com"


Scenario: Create account navigation
    When I click "Create Account"
    Then I see "First name"

Scenario: Create account without information
    When I click "Create Account"
    And I click Create Account button
    Then I see "This field is required"


Scenario: Create account without First Name field
    When I click "Create Account"
    And I fill in the form with the following information and submit without filling "First name"
        | firstname | lastname | password | phone |
        | John      | Doe      | @Testing11   | 1234567890 |
    Then I see "This field is required"


Scenario: Create account without Last Name field
    When I click "Create Account"
    And I fill in the form with the following information and submit without filling "Last name"
        | firstname | lastname | password | phone |
        | John      | Doe      | @Testing11   | 1234567890 |
    Then I see "This field is required"


Scenario: Create account without Password field
    When I click "Create Account"
    And I fill in the form with the following information and submit without filling "Password"
        | firstname | lastname | password | phone |
        | John      | Doe      | @Testing11   | 1234567890 |
    Then I see "This field is required"


Scenario: Create account without Phone field
    When I click "Create Account"
    And I fill in the form with the following information and submit without filling "Phone"
        | firstname | lastname | password | phone |
        | John      | Doe      | @Testing11   | 1234567890 |
    Then I see "This field is required"


Scenario: Create account without Email field
    When I click "Create Account"
    And I fill in the form with the following information and submit without filling "Email"
        | firstname | lastname | password | phone |
        | John      | Doe      | @Testing11   | 1234567890 |
    Then I see "This field is required"


Scenario: Fill in the form with valid information and submit
        When user click the Create Account button
        And the user fill in the form with the following information and submit
            | firstname | lastname | password | phone |
            | John      | Doe      | @Testing11   | 1234567890 |
            # And the user see the Create Organization button and click it
            # And the user fill the organization form and submit
        Then the user should be redirected to the homepage with the text "Welcome to Cart.com"
