$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("First.feature");
formatter.feature({
  "line": 2,
  "name": "Orange HRM Site\u003e\u003e\u003e Add user",
  "description": "",
  "id": "orange-hrm-site\u003e\u003e\u003e-add-user",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "duration": 4155341571,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I am having some prerequisite",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefination.pre()"
});
formatter.result({
  "duration": 308396830,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Positive Scenerio first type",
  "description": "",
  "id": "orange-hrm-site\u003e\u003e\u003e-add-user;positive-scenerio-first-type",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 8,
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I have opened the site",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I enter correct Admin and admin123",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I should get logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefination.i_have_opened_the_site()"
});
formatter.result({
  "duration": 55423,
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
  "duration": 3595007390,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.i_should_get_logged_in()"
});
formatter.result({
  "duration": 29064373,
  "status": "passed"
});
formatter.after({
  "duration": 545434354,
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
  "line": 6,
  "name": "Negative tests",
  "description": "",
  "id": "oranage-hrm-negative;negative-tests",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I have opened the site",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I enter wrong credentails i.e. \u003cusername\u003e and \u003cpassword\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I should stay in the login page",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "oranage-hrm-negative;negative-tests;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 12,
      "id": "oranage-hrm-negative;negative-tests;;1"
    },
    {
      "cells": [
        "AdminIncorrect",
        "admin123incorrect"
      ],
      "line": 13,
      "id": "oranage-hrm-negative;negative-tests;;2"
    },
    {
      "cells": [
        "AdminIncorrect",
        "admin123"
      ],
      "line": 14,
      "id": "oranage-hrm-negative;negative-tests;;3"
    },
    {
      "cells": [
        "Admin",
        "admin123inccorect"
      ],
      "line": 15,
      "id": "oranage-hrm-negative;negative-tests;;4"
    },
    {
      "cells": [
        "saurab",
        "saurab123"
      ],
      "line": 16,
      "id": "oranage-hrm-negative;negative-tests;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3839899006,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Negative tests",
  "description": "",
  "id": "oranage-hrm-negative;negative-tests;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I have opened the site",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I enter wrong credentails i.e. AdminIncorrect and admin123incorrect",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I should stay in the login page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefination.i_have_opened_the_site()"
});
formatter.result({
  "duration": 59939,
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
  "duration": 3022283849,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.i_should_stay_in_the_login_page()"
});
formatter.result({
  "duration": 31270219,
  "status": "passed"
});
formatter.after({
  "duration": 547947286,
  "status": "passed"
});
formatter.before({
  "duration": 3741949667,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Negative tests",
  "description": "",
  "id": "oranage-hrm-negative;negative-tests;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I have opened the site",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I enter wrong credentails i.e. AdminIncorrect and admin123",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I should stay in the login page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefination.i_have_opened_the_site()"
});
formatter.result({
  "duration": 82519,
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
  "duration": 3458572132,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.i_should_stay_in_the_login_page()"
});
formatter.result({
  "duration": 57168898,
  "status": "passed"
});
formatter.after({
  "duration": 550716397,
  "status": "passed"
});
formatter.before({
  "duration": 3351918876,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Negative tests",
  "description": "",
  "id": "oranage-hrm-negative;negative-tests;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I have opened the site",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I enter wrong credentails i.e. Admin and admin123inccorect",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I should stay in the login page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefination.i_have_opened_the_site()"
});
formatter.result({
  "duration": 73898,
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
  "duration": 2905787421,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.i_should_stay_in_the_login_page()"
});
formatter.result({
  "duration": 38092619,
  "status": "passed"
});
formatter.after({
  "duration": 545563265,
  "status": "passed"
});
formatter.before({
  "duration": 3780176123,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Negative tests",
  "description": "",
  "id": "oranage-hrm-negative;negative-tests;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I have opened the site",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I enter wrong credentails i.e. saurab and saurab123",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I should stay in the login page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefination.i_have_opened_the_site()"
});
formatter.result({
  "duration": 67329,
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
  "duration": 2646941867,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.i_should_stay_in_the_login_page()"
});
formatter.result({
  "duration": 32704245,
  "status": "passed"
});
formatter.after({
  "duration": 530704902,
  "status": "passed"
});
formatter.uri("Third.feature");
formatter.feature({
  "line": 2,
  "name": "Orange HRM Site\u003e\u003e\u003e Add user",
  "description": "",
  "id": "orange-hrm-site\u003e\u003e\u003e-add-user",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "duration": 4412202562,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I am having some prerequisite",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefination.pre()"
});
formatter.result({
  "duration": 425733,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "Positive Scenerio second type",
  "description": "",
  "id": "orange-hrm-site\u003e\u003e\u003e-add-user;positive-scenerio-second-type",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "I have opened the site",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I enter correct credentials",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 10
    },
    {
      "cells": [
        "Admin",
        "admin123"
      ],
      "line": 11
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I should get logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefination.i_have_opened_the_site()"
});
formatter.result({
  "duration": 48444,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.tryingMethod(DataTable)"
});
formatter.result({
  "duration": 3724423187,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.i_should_get_logged_in()"
});
formatter.result({
  "duration": 98088924,
  "status": "passed"
});
formatter.after({
  "duration": 527394286,
  "status": "passed"
});
});