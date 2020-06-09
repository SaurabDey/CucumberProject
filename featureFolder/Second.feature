
Feature: Oranage HRM negative
   
   
@Regression
Scenario Outline: Negative tests
    Given I have opened the site
    When I enter wrong credentails i.e. <username> and <password>
    Then I should stay in the login page

    Examples: 
      | username       | password          |
      | AdminIncorrect | admin123incorrect |
      | AdminIncorrect | admin123          |
      | Admin          | admin123inccorect |
      | saurab         | saurab123         |

