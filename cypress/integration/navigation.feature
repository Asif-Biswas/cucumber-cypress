Feature: Navigation

    Background:
        Given a web browser is at the cart.com homepage

    Scenario Outline: Hover over the navigation menu and click on a link to navigate to the page with the correct text
        When the user hover over the menu "<Navitem>"
        And click "<Link>" link
        Then a page with "<Text>" appears

        Examples:
            | Navitem     | Link                 | Text                                               |
            | Storefront  | Storefront Analytics | A bird's-eye view of your online store data.       |
            | Fulfillment | Order Management     | The who, what, when, where and why of every order. |
            | Funding     | Growth Capital       | Ecommerce-focused funding.                         |



# Scenario Outline: Click the navigation dropdown menu item, then hover the item and click on the lick to navigate to the correct page
#     Given a web browser is at the "<URL>" page
#     When the user click the dropdown menu item
#     And hover the "<Dropdown>" link
#     And click "<Link>" link
#     Then a page with "<Text>" appears

#     Examples:
#         | URL | Dropdown | Link | Text |
#         | https://www.cart.com/storefront/online-store | Storefront | Storefront Analytics | A bird's-eye view of your online store data. |




