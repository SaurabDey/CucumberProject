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
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I have opened the site",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefination.i_have_opened_the_site()"
});
formatter.result({
  "duration": 6934795960,
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
  "name": "I enter correct Admin and admin123",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I should get logged in",
  "keyword": "Then "
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
  "duration": 4203983086,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.i_should_get_logged_in()"
});
formatter.result({
  "duration": 599099269,
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
  "name": "I have opened the site",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefination.i_have_opened_the_site()"
});
formatter.result({
  "duration": 3460940964,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Positive Scenerio second type",
  "description": "",
  "id": "orange-hrm-site\u003e\u003e\u003e-add-user;positive-scenerio-second-type",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 15,
  "name": "I enter correct credentials",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 16
    },
    {
      "cells": [
        "Admin",
        "admin123"
      ],
      "line": 17
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "I should get logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefination.tryingMethod(DataTable)"
});
formatter.result({
  "duration": 3875122342,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.i_should_get_logged_in()"
});
formatter.result({
  "duration": 690699155,
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
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@Regression"
    }
  ]
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
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@Regression"
    }
  ]
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
  "duration": 4191025125,
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
  "duration": 3176222186,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.i_should_stay_in_the_login_page()"
});
formatter.result({
  "duration": 600381394,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Negative tests",
  "description": "",
  "id": "oranage-hrm-negative;negative-tests;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@Regression"
    }
  ]
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
  "duration": 4693709664,
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
  "duration": 3021610559,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.i_should_stay_in_the_login_page()"
});
formatter.result({
  "duration": 694121439,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Negative tests",
  "description": "",
  "id": "oranage-hrm-negative;negative-tests;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@Regression"
    }
  ]
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
  "duration": 3547602020,
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
  "duration": 3091629444,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.i_should_stay_in_the_login_page()"
});
formatter.result({
  "duration": 564963872,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Negative tests",
  "description": "",
  "id": "oranage-hrm-negative;negative-tests;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@Regression"
    }
  ]
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
  "duration": 3480458166,
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
  "duration": 2516879054,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.i_should_stay_in_the_login_page()"
});
formatter.result({
  "duration": 548830774,
  "status": "passed"
});
});