import { Given, When, Then } from '@wdio/cucumber-framework';

import Signup_Add_Ons from '../../pageobjects/addons'

  When(/^I enter the signup page and I click the edit plans & explore addons option$/, async () => {

    await Signup_Add_Ons.choose_addOns();
    
  });

   And(/^I enter valid card details in payment details$/, async () => {

    await Signup_Add_Ons.makePayment();

    
  });

  Then(/^I click the Terms of service checkbox and Pay Now button$/, async () => {

    console.log("signup successful");
    
});