#Author: your.email@your.domain.com
#Keywords Summary :
#Feature: List of scenarios.
#Scenario: Business rule through list of steps with arguments.
#Given: Some precondition step
#When: Some key actions
#Then: To observe outcomes or validation
#And,But: To enumerate more Given,When,Then steps
#Scenario Outline: List of steps for data-driven as an Examples and <placeholder>
#Examples: Container for s table
#Background: List of steps run before each of the scenarios
#""" (Doc Strings)
#| (Data Tables)
#@ (Tags/Labels):To group Scenarios
#<> (placeholder)
#""
## (Comments)
#Sample Feature Definition Template

#There will be plenty of "assertionErrors" due to the fail() method being used in the code

@Tag
Feature: Test JPetStore

#Testing that current users can login
@Tag1
Scenario Outline: Test JPetStore Login
		Given I open Firefox browser
		And I go to JPetStore page
		When I enter a valid "<username>" and "<password>" combination
		Then I should be able to login successfully

Examples:
| username | password |
| quality1 | 12345678 |
| quality2 | 12345678 |
| j2ee | j2ee |

#Testing that users that don't exist can't login, or users that do exist but use a wrong password can't login
@Tag1
Scenario Outline: Test JPetStore Login with False Credentials
	Given I open Firefox browser
	And I go to JPetStore page
	When I enter a invalid "<username>" and "<password>" combination
	Then I should get an error
	
Examples:
| username	| password	|
|	username	| password	|
|	quality1	|						|

#Testing to see that you can create a new account with everything filled in
@Tag2
Scenario Outline: Test JPetStore create New Account
	Given I open Firefox browser
	And I go to JPetStore page
	And I click Register
	When I enter a new valid "<username>" and "<password>" combination
	And I enter new account information "<first name>" "<last name>" "<email>" "<phone>" "<address>" "<city>" "<state>" "<zip>" "<country>"
	Then I should be able to create a new account with "<username>" and "<password>"	

Examples:
| username | password | first name | last name | email | phone | address | city | state | zip | country|
| Abbra	| Kadabra | 1234 | 1234 | 1234 | 1234 | 1234 | 1234 | 1234 | 1234 | 1234 |
| Test3	| aGiantP@assW0rd | 1234 | 1234 | 1234 | 1234 | 1234 | 1234 | 1234 | 1234 | 1234 |

#Testing to see if you get an error message for missing info
@Tag2
Scenario Outline: Test JPetStore create New Account missing information
	Given I open Firefox browser
	And I go to JPetStore page
	And I click Register
	When I enter a new valid "<username>" and "<password>" combination
	And I enter new account information "<first name>" "<last name>" "<email>" "<phone>" "<address>" "<city>" "<state>" "<zip>" "<country>"
	Then I should get an error based on missing information	

#missing username, or missing password will fail due to no popup message (when they should have one)
#missing state will fail as it has a status 500 error
Examples:
| username | password | first name | last name | email | phone | address | city | state | zip | country|
|  | pass | 1234 | 1234 | 1234 | 1234 | 1234 | 1234 | 1234 | 1234 | 1234 |
| user	|  | 1234 | 1234 | 1234 | 1234 | 1234 | 1234 | 1234 | 1234 | 1234 |
| user	| pass |  | 1234 | 1234 | 1234 | 1234 | 1234 | 1234 | 1234 | 1234 |
| user	| pass | 1234 |  | 1234 | 1234 | 1234 | 1234 | 1234 | 1234 | 1234 |
| user	| pass | 1234 | 1234 |  | 1234 | 1234 | 1234 | 1234 | 1234 | 1234 |
| user	| pass | 1234 | 1234 | 1234 |  | 1234 | 1234 | 1234 | 1234 | 1234 |
| user	| pass | 1234 | 1234 | 1234 | 1234 |  | 1234 | 1234 | 1234 | 1234 |
| user	| pass | 1234 | 1234 | 1234 | 1234 | 1234 |  | 1234 | 1234 | 1234 |
| user	| pass | 1234 | 1234 | 1234 | 1234 | 1234 | 1234 |  | 1234 | 1234 |
| user	| pass | 1234 | 1234 | 1234 | 1234 | 1234 | 1234 | 1234 |  | 1234 |
| user	| pass | 1234 | 1234 | 1234 | 1234 | 1234 | 1234 | 1234 | 1234 |  |

#Testing the changing of passwords with valid inputs
@Tag3
Scenario Outline: Test JPetStore Change Password
	Given I open Firefox browser
	And I go to JPetStore page
	And I enter a valid "<username>" and "<password>" combination
	And I login and go to my account
	When I enter a new "<password2>"
	And sign out
	And I go to JPetStore page
	And I enter a valid "<username>" and "<password2>" combination
	Then I should be able to login successfully
	
Examples:
| username | password | password2|
| Abbra | Kadabra | password1234 |
| Test3 | aGiantP@assW0rd | 12345678 |
| quality1 | 12345678 | password |

#Testing the changing of passwords with invalid inputs
@Tag3
Scenario Outline: Test JPetStore Change Password non-matching passwords
	Given I open Firefox browser
	And I go to JPetStore page
	And I enter a valid "<username>" and "<password>" combination
	And I login and go to my account
	When I enter a new "<password2>" and "<password3>"
	Then I should get an error based on missing information	

#Not testing if both passwords are empty as it's assumed leaving it empty means one doesn't want to change passwords
Examples:
| username | password | password2|	password3	|
|	quality2 | 12345678	| 12345	|	54321	|
|	quality2 | 12345678	| 12345	|	 | 
|	quality2 | 12345678	| 	|	54321	| 

