Feature: Jobs portal test
    The number of open jobs in each city should be equal to the number of positions.
    Scenario Outline: Check counters for <city>, <state>
        Given I have visited the Olenick's job portal
        When I filter job openings by "<city>", "<state>" city location
        Then the number of job openings should be the same as the counter for city "<city>", "<state>"
        Examples:
            | city         | state                   |
            | Baton Rouge  | Louisiana               |
            | Belfast      | Antrim and Newtownabbey |
            | Bolingbrook  | Illinois                |
            | Chicago      | Illinois                |
            | London       | Greater London          |
            | Riverwoods   | Illinois                |
            | Vernon Hills | Illinois                |