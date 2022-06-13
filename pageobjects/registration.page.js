/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
import { RerunFormatter } from '@cucumber/cucumber';
import Helper from '../utilites/helper';
import PropertiesFile from '../utilites/configProperties';

class Registration {

  // Registration page locators (This locator common for all brands except AF(UK))

  get registraiotn_name_form() { return $('#name'); }

  get registration_email_form() { return $('#email'); }

  get registration_phone_form() { return $('#phone'); }

  get registration_companyName_form() { return $('#company'); }

  get showPlans_button() { return $('#register'); }

  // AnswerConnect_UK
  async registration_For_AnswerConnetUK() {
    await Helper.setValue_on_element(this.registraiotn_name_form, PropertiesFile.registration_TestData.RegistrationName);
    await Helper.setValue_on_element(this.registration_email_form, PropertiesFile.registration_TestData.RegistrationEmail);
    await Helper.setValue_on_element(this.registration_phone_form, PropertiesFile.registration_TestData.RegistrationPhone);
    await Helper.click_on_element(this.showPlans_button);
  }

  // AnswerConnect_US
  async registrationData_For_AC_US() {
    await Helper.setValue_on_element(this.registraiotn_name_form, PropertiesFile.registration_TestData.RegistrationName);
    await Helper.setValue_on_element(this.registration_email_form, PropertiesFile.registration_TestData.RegistrationEmail);
    await Helper.setValue_on_element(this.registration_phone_form, PropertiesFile.registration_TestData.RegistrationPhone);
    await Helper.click_on_element(this.showPlans_button);
  }

  // AnswerConnect_CA
  async registrationData_For_AC_CA() {
    await Helper.setValue_on_element(this.registraiotn_name_form, PropertiesFile.registration_TestData.RegistrationName);
    await Helper.setValue_on_element(this.registration_email_form, PropertiesFile.registration_TestData.RegistrationEmail);
    await Helper.setValue_on_element(this.registration_phone_form, PropertiesFile.registration_TestData.RegistrationPhone);
    await Helper.click_on_element(this.showPlans_button);
  }

  // AnswerForce US
  async registrationData_For_AnswerForce() {
    await Helper.setValue_on_element(this.registraiotn_name_form, PropertiesFile.registration_TestData.RegistrationName);
    await Helper.setValue_on_element(this.registration_email_form, PropertiesFile.registration_TestData.RegistrationEmail);
    await Helper.setValue_on_element(this.registration_phone_form, PropertiesFile.registration_TestData.RegistrationPhone);
    await Helper.setValue_on_element(this.registration_companyName_form, PropertiesFile.registration_TestData.RegistrationCompanyName);
    await Helper.click_on_element(this.showPlans_button);
  }

  // AnswerForceUK Registration page locators (AF UK locator not match with common locator)
  get AF_UK_nameForm() { return $('#newname'); }

  get AF_UK_emailForm() { return $('#newemail'); }

  get AF_UK_phoneForm() { return $('#newphone'); }

  get AF_UK_RegistrationPagecheckBox() { return $('#gdpr_agree'); }

  get AF_UK_ContineButton() { return $('#newsubmitbtn'); }

  // AnswerForce UK Registration page Action
  async registrationData_For_AnswerForceUK() {
    await Helper.setValue_on_element(this.AF_UK_nameForm, PropertiesFile.registration_TestData.RegistrationName);
    await Helper.setValue_on_element(this.AF_UK_emailForm, PropertiesFile.registration_TestData.RegistrationEmail);
    await Helper.setValue_on_element(this.AF_UK_phoneForm, PropertiesFile.RegistrationPhone);
    await Helper.click_on_element(this.AF_UK_RegistrationPagecheckBox);
    await Helper.click_on_element(this.AF_UK_ContineButton);
  }

  // AnswerForce_CA
  async registrationData_For_AF_CA() {
    // this.registrationData_For_AnswerForce(name,email,phone,companyName); // AF(Us) and AF(CA) both registration element and meothod are same so i reuse AF(UK) Method
    await Helper.setValue_on_element(this.registraiotn_name_form, PropertiesFile.registration_TestData.RegistrationName);
    await Helper.setValue_on_element(this.registration_email_form, PropertiesFile.registration_TestData.RegistrationEmail);
    await Helper.setValue_on_element(this.registration_phone_form, PropertiesFile.registration_TestData.RegistrationPhone);
    await Helper.setValue_on_element(this.registration_companyName_form, PropertiesFile.registration_TestData.RegistrationCompanyName);
    await Helper.click_on_element(this.showPlans_button);
  }

  // Lexreceptions
  async registration_For_Lexreception() {
    await Helper.setValue_on_element(this.registraiotn_name_form, PropertiesFile.registration_TestData.RegistrationName);
    await Helper.setValue_on_element(this.registration_companyName_form, PropertiesFile.registration_TestData.RegistrationCompanyName);
    await Helper.setValue_on_element(this.registration_email_form, PropertiesFile.registration_TestData.RegistrationEmail);
    await Helper.setValue_on_element(this.registration_phone_form, PropertiesFile.registration_TestData.RegistrationPhone);
    await Helper.click_on_element(this.showPlans_button);
  }

  // wellReceived
  async registration_For_WellReceived() {
    await Helper.setValue_on_element(this.registraiotn_name_form, PropertiesFile.registration_TestData.RegistrationName);
    await Helper.setValue_on_element(this.registration_email_form, PropertiesFile.registration_TestData.RegistrationEmail);
    await Helper.setValue_on_element(this.registration_phone_form, PropertiesFile.registration_TestData.RegistrationPhone);
    await Helper.click_on_element(this.showPlans_button);
  }

  // Hellosells
  get view_plans_and_prices_hellosells_button() { return $('#submitbtn'); }

  async registration_For_HelloSells() {
    await Helper.setValue_on_element(this.registraiotn_name_form, PropertiesFile.registration_TestData.RegistrationName);
    await Helper.setValue_on_element(this.registration_companyName_form, PropertiesFile.registration_TestData.RegistrationCompanyName);
    await Helper.setValue_on_element(this.registration_phone_form, PropertiesFile.registration_TestData.RegistrationPhone);
    await Helper.click_on_element(this.view_plans_and_prices_hellosells_button);
  }
}

>>>>>>> 9f5153c (new enhancement)
export default new Registration();
