Feature: Dropdown Navigation


Scenario Outline: Click the navigation dropdown menu item, then hover the item and click on the lick to navigate to the correct page 
    Given cart.com homepage
    When the user click the button Get Started in "<Title>" card
    Then a page with url "<URL>" appears

    Examples:
        | Title | URL |
        | Unified Analytics | https://console.cart.com/unified-analytics/dashboard |
        | Fulfillment | https://console.cart.com/fulfillment |
        | Growth Marketing | https://console.cart.com/growth-marketing |