$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("feature.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: your.email@your.domain.com"
    },
    {
      "line": 2,
      "value": "#Keywords Summary :"
    },
    {
      "line": 3,
      "value": "#Feature: List of scenarios."
    },
    {
      "line": 4,
      "value": "#Scenario: Business rule through list of steps with arguments."
    },
    {
      "line": 5,
      "value": "#Given: Some precondition step"
    },
    {
      "line": 6,
      "value": "#When: Some key actions"
    },
    {
      "line": 7,
      "value": "#Then: To observe outcomes or validation"
    },
    {
      "line": 8,
      "value": "#And,But: To enumerate more Given,When,Then steps"
    },
    {
      "line": 9,
      "value": "#Scenario Outline: List of steps for data-driven as an Examples and \u003cplaceholder\u003e"
    },
    {
      "line": 10,
      "value": "#Examples: Container for s table"
    },
    {
      "line": 11,
      "value": "#Background: List of steps run before each of the scenarios"
    },
    {
      "line": 12,
      "value": "#\"\"\" (Doc Strings)"
    },
    {
      "line": 13,
      "value": "#| (Data Tables)"
    },
    {
      "line": 14,
      "value": "#@ (Tags/Labels):To group Scenarios"
    },
    {
      "line": 15,
      "value": "#\u003c\u003e (placeholder)"
    },
    {
      "line": 16,
      "value": "#\"\""
    },
    {
      "line": 17,
      "value": "## (Comments)"
    },
    {
      "line": 18,
      "value": "#Sample Feature Definition Template"
    }
  ],
  "line": 21,
  "name": "Test JPetStore Login",
  "description": "",
  "id": "test-jpetstore-login",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 22,
  "name": "Test JPetStore Login",
  "description": "",
  "id": "test-jpetstore-login;test-jpetstore-login",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 23,
  "name": "I open Firefox browser",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "I go to JPetStore page",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I enter a valid \"\u003cusername\u003e\" and \"\u003cpassword\u003e\" combination",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "I should be able to login successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 28,
  "name": "",
  "description": "",
  "id": "test-jpetstore-login;test-jpetstore-login;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 29,
      "id": "test-jpetstore-login;test-jpetstore-login;;1"
    },
    {
      "cells": [
        "quality1",
        "12345678"
      ],
      "line": 30,
      "id": "test-jpetstore-login;test-jpetstore-login;;2"
    },
    {
      "cells": [
        "j2ee",
        "j2ee"
      ],
      "line": 31,
      "id": "test-jpetstore-login;test-jpetstore-login;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 30,
  "name": "Test JPetStore Login",
  "description": "",
  "id": "test-jpetstore-login;test-jpetstore-login;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 23,
  "name": "I open Firefox browser",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "I go to JPetStore page",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I enter a valid \"quality1\" and \"12345678\" combination",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "I should be able to login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.i_open_Firefox_browser()"
});
formatter.result({
  "duration": 8965058402,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_go_to_JPetStore_page()"
});
formatter.result({
  "duration": 1173684623,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "quality1",
      "offset": 17
    },
    {
      "val": "12345678",
      "offset": 32
    }
  ],
  "location": "LoginSteps.i_enter_a_valid_and_combination(String,String)"
});
formatter.result({
  "duration": 632031694,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_should_be_able_to_login_successfully()"
});
formatter.result({
  "duration": 1902211337,
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.fail(Assert.java:95)\r\n\tat steps.LoginSteps.i_should_be_able_to_login_successfully(LoginSteps.java:44)\r\n\tat ✽.Then I should be able to login successfully(feature.feature:26)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 31,
  "name": "Test JPetStore Login",
  "description": "",
  "id": "test-jpetstore-login;test-jpetstore-login;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 23,
  "name": "I open Firefox browser",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "I go to JPetStore page",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I enter a valid \"j2ee\" and \"j2ee\" combination",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "I should be able to login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.i_open_Firefox_browser()"
});
formatter.result({
  "duration": 7049444076,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_go_to_JPetStore_page()"
});
formatter.result({
  "duration": 1353299900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "j2ee",
      "offset": 17
    },
    {
      "val": "j2ee",
      "offset": 28
    }
  ],
  "location": "LoginSteps.i_enter_a_valid_and_combination(String,String)"
});
formatter.result({
  "duration": 596197162,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_should_be_able_to_login_successfully()"
});
formatter.result({
  "duration": 1789556266,
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.fail(Assert.java:95)\r\n\tat steps.LoginSteps.i_should_be_able_to_login_successfully(LoginSteps.java:44)\r\n\tat ✽.Then I should be able to login successfully(feature.feature:26)\r\n",
  "status": "failed"
});
});