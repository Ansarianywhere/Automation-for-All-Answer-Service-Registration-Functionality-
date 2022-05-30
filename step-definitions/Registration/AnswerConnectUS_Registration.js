
import { Given, When, Then } from '@wdio/cucumber-framework';

import HomePage from '../../pageobjects/home.page';
import Registration from '../../pageobjects/registration.page'
import ChoosePlan_Singup from '../../pageobjects/Plans.page'

  Given(/^I am on the home page$/,async () => {

    await HomePage.openHomepage_AC_US();
    
  });

  When(/^I Navigate to the Register page and set the value for All mandantory fields$/, async () => {
    
       await Registration.registrationData_For_AC_US("Ansari","jaminansari@gmail.com",7538812986);
  });

  Then(/^I click the choose plan Button and verify the given details$/,  async () =>{

       await ChoosePlan_Singup.verify_All_RegistarionData_For_AC_US();

  });