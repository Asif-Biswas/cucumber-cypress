Feature: Navigation for logged in users


Scenario Outline: Fill in the form and submit
    # Given a web browser is at the "https://cart.com" homepage
    #     And user click the signup button
    #     And user should be redirected to the signup page with the title "Welcome to Cart.com"
    #     And the user fill in the form with the following information and submit
    #         | email | password |
    #         | vecanon423@richdn.com | @Testing11 |
    #     And the user should be redirected to the homepage with the title "Welcome to Cart.com"

    Given I login

    When the user click the dropdown menu
        And click the "<Link>" link
    Then the user should be redirected to the page with the title "<Title>"

    Examples:
        | Link | Title |
        | Fulfillment | Fulfillment |
        | Storefront | Give it a name |