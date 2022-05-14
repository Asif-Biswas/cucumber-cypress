Feature: Dropdown Navigation


Scenario Outline: Click the navigation dropdown menu item, then hover the item and click on the lick to navigate to the correct page 
    Given a web browser is at the "<URL>" page
    When the user click the dropdown menu item
    And hover the "<Dropdown>" link
    And click "<Link>" link
    Then a page with "<Text>" appears

    Examples:
        | URL | Dropdown | Link | Text |
        | https://www.cart.com/storefront/online-store | Storefront | Storefront Analytics | A bird's-eye view of your online store data. |




