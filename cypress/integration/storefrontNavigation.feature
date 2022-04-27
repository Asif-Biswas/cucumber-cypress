Feature: Storefront page Features Navigation

    Background:
        Given a web browser is at the "https://www.cart.com/storefront/online-store" page

    Scenario Outline: User scrolls to the bottom of the page and clicking a link navigates to the correct page
        When the user click Features nav item
        And the user click "<Link>" link
        Then a page with "<Text>" appears

        Examples:
            | Link | Text |
            | Cart Shipping | Cart Shipping |
            | Headless Commerce & Full Control | Headless Commerce & Full Control |