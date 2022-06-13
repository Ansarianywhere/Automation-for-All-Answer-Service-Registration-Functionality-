Feature: Registration functionlity for Answerforce CA

  Scenario: Register in AnsewerForce CA with valid data  
      Given I am on the home page and I Navigate to the Register page
      When  I set the value for All mandantory fields
      Then  I click the choose plan Button and verify the given details
      