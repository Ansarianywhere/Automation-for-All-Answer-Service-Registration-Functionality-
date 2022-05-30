Feature: Register , Registration functionlity for Answerforce UK

  Scenario: Register in AnsewerForce UK with valid data  
      Given I am on the home page
      When I Navigate to the Register page and set the value for All mandantory fields
      Then I click the choose plan Button and verify the given details
      