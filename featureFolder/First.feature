@Regression
Feature: Orange HRM Site>>> Add user

Background: 
   Given I am having some prerequisite
    

@Sanity
  Scenario: Positive Scenerio first type
    Given I have opened the site
    When I enter correct Admin and admin123
    Then I should get logged in

 
  Scenario: Positive Scenerio second type
    Given I have opened the site
    When I enter correct credentials
                 |username|password|
                 |Admin   |admin123|
    Then I should get logged in 
