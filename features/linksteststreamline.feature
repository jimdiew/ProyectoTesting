Feature: Working links test
    Every link in the Olenick's home page has to redirect you correctly.
    Scenario Outline: Working links test
        Given I have visited the Olenick home page
        When I click the "<headerLink>" header link
        Then page "<pageName>" should open in the same window
        Examples:
            | headerLink    | pageName      |
            | IT Projects   | IT Projects   |
            | IT Operations | IT Operations |
            | IT Governance | IT Governance |
            | News          | News          |
            | Our Expertise | Expertise     |
            | About Us      | About         |
