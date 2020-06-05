$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("First.feature");
formatter.feature({
  "line": 1,
  "name": "Orange HRM Site\u003e\u003e\u003e Add user",
  "description": "",
  "id": "orange-hrm-site\u003e\u003e\u003e-add-user",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Positive Scenerio first type",
  "description": "",
  "id": "orange-hrm-site\u003e\u003e\u003e-add-user;positive-scenerio-first-type",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I have opened the site",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I enter correct Admin and admin123",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I should get logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefination.i_have_opened_the_site()"
});
formatter.result({
  "duration": 5982878179,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 16
    },
    {
      "val": "admin123",
      "offset": 26
    }
  ],
  "location": "StepDefination.i_enter_correct_username_and_password(String,String)"
});
formatter.result({
  "duration": 4035634949,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.i_should_get_logged_in()"
});
formatter.result({
  "duration": 573741942,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "Positive Scenerio second type",
  "description": "",
  "id": "orange-hrm-site\u003e\u003e\u003e-add-user;positive-scenerio-second-type",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "I have opened the site",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I enter correct credentials",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 11
    },
    {
      "cells": [
        "Admin",
        "admin123"
      ],
      "line": 12
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I should get logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefination.i_have_opened_the_site()"
});
formatter.result({
  "duration": 4131197095,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.tryingMethod(DataTable)"
});
formatter.result({
  "duration": 3796972213,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.i_should_get_logged_in()"
});
formatter.result({
  "duration": 651534852,
  "status": "passed"
});
formatter.uri("Second.feature");
formatter.feature({
  "line": 2,
  "name": "Oranage HRM negative",
  "description": "",
  "id": "oranage-hrm-negative",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Negative tests",
  "description": "",
  "id": "oranage-hrm-negative;negative-tests",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "I have opened the site",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I enter wrong credentails i.e. \u003cusername\u003e and \u003cpassword\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I should stay in the login page",
  "keyword": "Then "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "oranage-hrm-negative;negative-tests;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 11,
      "id": "oranage-hrm-negative;negative-tests;;1"
    },
    {
      "cells": [
        "AdminIncorrect",
        "admin123incorrect"
      ],
      "line": 12,
      "id": "oranage-hrm-negative;negative-tests;;2"
    },
    {
      "cells": [
        "AdminIncorrect",
        "admin123"
      ],
      "line": 13,
      "id": "oranage-hrm-negative;negative-tests;;3"
    },
    {
      "cells": [
        "Admin",
        "admin123inccorect"
      ],
      "line": 14,
      "id": "oranage-hrm-negative;negative-tests;;4"
    },
    {
      "cells": [
        "saurab",
        "saurab123"
      ],
      "line": 15,
      "id": "oranage-hrm-negative;negative-tests;;5"
    },
    {
      "cells": [
        "Admin",
        "admin123"
      ],
      "line": 16,
      "id": "oranage-hrm-negative;negative-tests;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 12,
  "name": "Negative tests",
  "description": "",
  "id": "oranage-hrm-negative;negative-tests;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "I have opened the site",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I enter wrong credentails i.e. AdminIncorrect and admin123incorrect",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I should stay in the login page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefination.i_have_opened_the_site()"
});
formatter.result({
  "duration": 3729502237,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "AdminIncorrect",
      "offset": 31
    },
    {
      "val": "admin123incorrect",
      "offset": 50
    }
  ],
  "location": "StepDefination.i_enter_incorrect_username_and_password(String,String)"
});
formatter.result({
  "duration": 3088874101,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.i_should_stay_in_the_login_page()"
});
formatter.result({
  "duration": 558871092,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Negative tests",
  "description": "",
  "id": "oranage-hrm-negative;negative-tests;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "I have opened the site",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I enter wrong credentails i.e. AdminIncorrect and admin123",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I should stay in the login page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefination.i_have_opened_the_site()"
});
formatter.result({
  "duration": 4067488861,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "AdminIncorrect",
      "offset": 31
    },
    {
      "val": "admin123",
      "offset": 50
    }
  ],
  "location": "StepDefination.i_enter_incorrect_username_and_password(String,String)"
});
formatter.result({
  "duration": 2757559921,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.i_should_stay_in_the_login_page()"
});
formatter.result({
  "duration": 577748365,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Negative tests",
  "description": "",
  "id": "oranage-hrm-negative;negative-tests;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "I have opened the site",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I enter wrong credentails i.e. Admin and admin123inccorect",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I should stay in the login page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefination.i_have_opened_the_site()"
});
formatter.result({
  "duration": 3788219583,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 31
    },
    {
      "val": "admin123inccorect",
      "offset": 41
    }
  ],
  "location": "StepDefination.i_enter_incorrect_username_and_password(String,String)"
});
formatter.result({
  "duration": 2920561663,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.i_should_stay_in_the_login_page()"
});
formatter.result({
  "duration": 554234496,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Negative tests",
  "description": "",
  "id": "oranage-hrm-negative;negative-tests;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "I have opened the site",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I enter wrong credentails i.e. saurab and saurab123",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I should stay in the login page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefination.i_have_opened_the_site()"
});
formatter.result({
  "duration": 4507102891,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "saurab",
      "offset": 31
    },
    {
      "val": "saurab123",
      "offset": 42
    }
  ],
  "location": "StepDefination.i_enter_incorrect_username_and_password(String,String)"
});
formatter.result({
  "duration": 3150743132,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.i_should_stay_in_the_login_page()"
});
formatter.result({
  "duration": 572098567,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Negative tests",
  "description": "",
  "id": "oranage-hrm-negative;negative-tests;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "I have opened the site",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I enter wrong credentails i.e. Admin and admin123",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I should stay in the login page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefination.i_have_opened_the_site()"
});
formatter.result({
  "duration": 4158612289,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 31
    },
    {
      "val": "admin123",
      "offset": 41
    }
  ],
  "location": "StepDefination.i_enter_incorrect_username_and_password(String,String)"
});
formatter.result({
  "duration": 3673458714,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.i_should_stay_in_the_login_page()"
});
formatter.result({
  "duration": 26920498,
  "error_message": "java.lang.AssertionError: expected [https://opensource-demo.orangehrmlive.com/index.php/auth/validateCredentials] but found [https://opensource-demo.orangehrmlive.com/index.php/dashboard]\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:513)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:135)\r\n\tat org.testng.Assert.assertEquals(Assert.java:116)\r\n\tat org.testng.Assert.assertEquals(Assert.java:190)\r\n\tat org.testng.Assert.assertEquals(Assert.java:200)\r\n\tat com.org.CucumberProject.StepDefination.i_should_stay_in_the_login_page(StepDefination.java:57)\r\n\tat ✽.Then I should stay in the login page(Second.feature:8)\r\n",
  "status": "failed"
});
});