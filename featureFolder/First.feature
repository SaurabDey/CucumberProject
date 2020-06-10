@Regression
Feature: Orange HRM Site>>> Add user

Background: 
   Given I am having some prerequisite
    
@Smoke
@Sanity
  Scenario: Positive Scenerio first type
    Given I have opened the site
    When I enter correct Admin and admin123
    Then I should get logged in
