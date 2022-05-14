Feature: Book a demo


Scenario: Fill in the form and submit
    Given a web browser is at the Book a chat page
    When the user fill in the form with the following information and submit
        | firstname | lastname | phone | email | country | zip | interested | message |
        | vec | anon | 123456789 | vecanon423@richdn.com | United States | 1234 | Storefront | Hello |
    Then the user should be see the page with "Thank you! 🙌 A representative will be in touch shortly."

    