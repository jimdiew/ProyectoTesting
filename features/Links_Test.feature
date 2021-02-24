Feature: Working links test
    Every link in the Olenick's home page has to redirect you correctly.
    Scenario Outline: Working links test
        Given I have visited the Olenick home page
        When I click the "<headerLink>" header link
        Then the page titled "<pageTitle>" with url "<url>" should open in the same window
        And hero title is "<heroTitle>"
        Examples:
            | headerLink    | pageTitle                                                             | url                                | heroTitle     |
            | IT Projects   | IT Projects - Olenick Service Pillars                                 | /service-categories/it-projects/   | IT Projects   |
            | IT Operations | IT Operations - Olenick Service Pillars                               | /service-categories/it-operations/ | IT Operations |
            | IT Governance | IT Governance - Olenick Service Pillars                               | /service-categories/it-governance/ | IT Governance |
            | News          | Company News and Announcements - Olenick                              | /news/                             | News          |
            | Our Expertise | Olenick Insights and Experience - Explore Our Blog and More           | /blog/                             | Our Expertise |
            | About Us      | About Olenick: Over 20 Years of Experience in Software Testing and QA | /about-us/                         | About Olenick |
