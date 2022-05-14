Feature: Footer Navigation

    Background:
        Given a web browser is at the "https://cart.com" homepage

    Scenario Outline: User scrolls to the bottom of the page and clicking a link navigates to the correct page
        When the user click "<Navitem>"
        Then a page with "<Text>" appears

        Examples:
            | Navitem | Text |
            | Pixel | Unlock the path to incrementality. |
            | Inventory Storage | Big footprint. Small price tag. |
            | About Us | Power to the brands |
