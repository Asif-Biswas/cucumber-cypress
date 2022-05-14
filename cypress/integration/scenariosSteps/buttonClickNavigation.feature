Feature: Random button click Navigation

    Scenario Outline: User clicks on random button
        Given a web browser is at the "<URL>" page
        When the user click "<button>" button
        Then a page with "<Text>" appears

        Examples:
            | URL | button | Text |
            | https://www.cart.com/storefront/online-store | Comparison | Feature Comparison |
            | https://www.cart.com/storefront/online-store/cart-shipping | Book a demo | Book a chat |