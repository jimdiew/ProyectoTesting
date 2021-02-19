Feature: Working links test
    Every link in the Olenick's home page has to redirect you correctly.
    Scenario: Working links test
        Given I have visited the Olenick home page
        When I click the "IT Projects" header link
        Then the page titled "IT Projects - Olenick Service Pillars" with url "/service-categories/it-projects/" should open in the same window

