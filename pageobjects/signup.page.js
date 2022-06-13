/* eslint-disable linebreak-style */
/* eslint-disable import/no-useless-path-segments */
/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable no-undef */
/* eslint-disable class-methods-use-this */
/* eslint-disable linebreak-style */
/* eslint-disable camelcase */

import { assert } from 'chai';
import PropertiesFile from '../utilites/configProperties';
// eslint-disable-next-line import/no-unresolved
import Plans_Page from '../pageobjects/plans.page';
import Helper from '../utilites/helper';

class ChoosePlan_Singup {
  // Note: Expected result data comes from config properties files

  get signUp_company_Name() { return $('#companyName'); }

  get signUp_conatact_Name() { return $('#contactName'); }

  get signUp_email() { return $('#email'); }

  get signUp_phone() { return $('#phone'); }

  // AnswerConnect UK
  verify_All_RegistrationData_For_AnswerConnectUK = async () => {
    await Helper.click_on_element(Plans_Page.choosePlan_ForAnswerConnectUK, PropertiesFile.waitTime.maximumWait); // this element comes form plans page & time comes from properties file
    const contactName = await Helper.getValue_on_element(this.signUp_conatact_Name, PropertiesFile.waitTime.maximumWait);
    const email = await Helper.getValue_on_element(this.signUp_email, PropertiesFile.waitTime.maximumWait);
    const phone = await Helper.getValue_on_element(this.signUp_phone, PropertiesFile.waitTime.maximumWait);

    assert.equal(PropertiesFile.registration_TestData.RegistrationName, contactName);
    assert.equal(PropertiesFile.registration_TestData.RegistrationEmail, email);
    assert.equal(PropertiesFile.registration_TestData.RegistrationPhone, phone);
  };

  // AnswerConnectUS
  async verify_All_RegistarionData_For_AC_US() {
    await Helper.click_on_element(Plans_Page.choosePlan_AC_US, PropertiesFile.waitTime.maximumWait);
    const contactName = await Helper.getValue_on_element(this.signUp_conatct_Name, PropertiesFile.waitTime.maximumWait);
    const email = await Helper.getValue_on_element(this.signUp_email, PropertiesFile.waitTime.maximumWait);
    const phone = await Helper.getValue_on_element(this.signUp_phone, PropertiesFile.waitTime.maximumWait);

    assert.equal(PropertiesFile.registration_TestData.RegistrationCompanyName, contactName);
    assert.equal(PropertiesFile.registration_TestData.RegistrationEmail, email);
    assert.equal(PropertiesFile.registration_TestData.RegistrationPhone, phone);
  }

  // AnswerConnect CA
  async verify_All_RegistrationData_For_AC_CA() {
    await Helper.click_on_element(Plans_Page.choosePlan_AC_US, PropertiesFile.waitTime.maximumWait);
    const contactName = await Helper.getValue_on_element(this.signUp_conatct_Name, PropertiesFile.waitTime.maximumWait);
    const email = await Helper.getValue_on_element(this.signUp_email, PropertiesFile.waitTime.maximumWait);
    const phone = await Helper.getValue_on_element(this.signUp_phone, PropertiesFile.waitTime.maximumWait);

    assert.equal(PropertiesFile.registration_TestData.RegistrationCompanyName, contactName);
    assert.equal(PropertiesFile.registration_TestData.RegistrationEmail, email);
    assert.equal(PropertiesFile.registration_TestData.RegistrationPhone, phone);
  }

  // AnswerForce US
  async verify_All_RegistrationData_For_AnswerForce(expectCompanyName, expectContactName, expectEmail, expectPhone) {
    await Helper.click_on_element(Plans_Page.choose_planForAnswerForceUS, PropertiesFile.waitTime.maximumWait);
    const companyName = await Helper.getValue_on_element(this.signUp_company_Name, PropertiesFile.waitTime.maximumWait);
    const contactName = await (await this.signUp_conatct_Name).getValue();
    const email = await Helper.getValue_on_element(this.signUp_email, PropertiesFile.waitTime.maximumWait);
    const phone = await Helper.getValue_on_element(this.signUp_phone, PropertiesFile.waitTime.maximumWait);

    //    expect(companyName).toBe("Full"); --- validatations
    //    expect(contactName).toBe("Ansari ");

    assert.equal(expectCompanyName, companyName);
    assert.equal(expectContactName, contactName);
    assert.equal(expectEmail, email);
    assert.equal(expectPhone, phone);
  }

  // AnswerForce Uk
  async verify_All_RegistrationData_For_AF_UK() {
    await Helper.click_on_element(Plans_Page.Plans_Page.ChoosePlan_AnswerForce_UK, PropertiesFile.waitTime.maximumWait);
    const contactName = await Helper.getValue_on_element(this.this.signUp_conatct_Name, PropertiesFile.waitTime.maximumWait);
    const email = await Helper.getValue_on_element(this.this.signUp_email, PropertiesFile.waitTime.maximumWait);
    const phone = await Helper.getValue_on_element(this.signUp_phone, PropertiesFile.waitTime.maximumWait);

    assert.equal(PropertiesFile.registration_TestData.RegistrationName, contactName);
    assert.equal(PropertiesFile.registration_TestData.RegistrationEmail, email);
    assert.equal(PropertiesFile.registration_TestData.RegistrationPhone, phone);
  }

  // AnswerForceCA
  async verify_All_RegistrationData_For_AF_CA() {
    await Helper.click_on_element(Plans_Page.Chooseplan_AF_CA, PropertiesFile.waitTime.maximumWait);
    const companyName = await Helper.getValue_on_element(this.signUp_company_Name, PropertiesFile.waitTime.maximumWait);
    const contactName = await Helper.getValue_on_element(this.this.signUp_conatct_Name, PropertiesFile.waitTime.maximumWait);
    const email = await Helper.getValue_on_element(this.this.signUp_email, PropertiesFile.waitTime.maximumWait);
    const phone = await Helper.getValue_on_element(this.signUp_phone, PropertiesFile.waitTime.maximumWait);

    assert.equal(PropertiesFile.registration_TestData.RegistrationCompanyName, companyName);
    assert.equal(PropertiesFile.registration_TestData.RegistrationCompanyName, contactName);
    assert.equal(PropertiesFile.registration_TestData.RegistrationEmail, email);
    assert.equal(PropertiesFile.registration_TestData.RegistrationPhone, phone);
  }

  // LexReceptions
  async verify_All_RegistrationData_For_LexReception() {
    await Helper.click_on_element(Plans_Page.choosePlan_ForLexReception, PropertiesFile.waitTime.maximumWait);
    const contactName = await Helper.getValue_on_element(this.this.signUp_conatct_Name, PropertiesFile.waitTime.maximumWait);
    const companyName = await Helper.getValue_on_element(this.signUp_company_Name, PropertiesFile.waitTime.maximumWait);
    const email = await Helper.getValue_on_element(this.this.signUp_email, PropertiesFile.waitTime.maximumWait);
    const phone = await Helper.getValue_on_element(this.signUp_phone, PropertiesFile.waitTime.maximumWait);

    assert.equal(PropertiesFile.registration_TestData.RegistrationName, contactName);
    assert.equal(PropertiesFile.registration_TestData.RegistrationCompanyName, companyName);
    assert.equal(PropertiesFile.registration_TestData.RegistrationEmail, email);
    assert.equal(PropertiesFile.registration_TestData.RegistrationPhone, phone);
  }

  // HelloSells
  async verify_All_RegistrationData_For_HelloSells() {
    await Helper.click_on_element(Plans_Page.chooosePlansForHelloSells, PropertiesFile.waitTime.maximumWait);
    const contactName = await Helper.getValue_on_element(this.this.signUp_conatct_Name, PropertiesFile.waitTime.maximumWait);
    const email = await Helper.getValue_on_element(this.this.signUp_email, PropertiesFile.waitTime.maximumWait);
    const phone = await Helper.getValue_on_element(this.signUp_phone, PropertiesFile.waitTime.maximumWait);

    assert.equal(PropertiesFile.registration_TestData.RegistrationName, contactName);
    assert.equal(PropertiesFile.registration_TestData.RegistrationEmail, email);
    assert.equal(PropertiesFile.registration_TestData.RegistrationPhone, phone);
  }

  // WellReceived
  async verify_All_RegistrationData_For_WellReceived() {
    await Helper.click_on_element(Plans_Page.choosePlanButton_ForWellReceived, PropertiesFile.waitTime.maximumWait);
    const contactName = await Helper.getValue_on_element(this.this.signUp_conatct_Name, PropertiesFile.waitTime.maximumWait);
    const email = await Helper.getValue_on_element(this.this.signUp_email, PropertiesFile.waitTime.maximumWait);
    const phone = await Helper.getValue_on_element(this.signUp_phone, PropertiesFile.waitTime.maximumWait);

    assert.equal(PropertiesFile.registration_TestData.RegistrationName, contactName);
    assert.equal(PropertiesFile.registration_TestData.RegistrationEmail, email);
    assert.equal(PropertiesFile.registration_TestData.RegistrationPhone, phone);
  }
}

export default new ChoosePlan_Singup();
