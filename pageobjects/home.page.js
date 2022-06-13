/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable linebreak-style */
/* eslint-disable spaced-comment */
/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
/* eslint-disable class-methods-use-this */
// eslint-disable-next-line no-unused-vars
import Helper from '../utilites/helper';
import PropertiesFile from '../utilites/configProperties';

class HomePage {
  // AnswerConnect (UK)
  get PlansPricesForAnswerConnect() {
    return $('(//a[text()=\'Plans & Pricing\'])[2]');
  }

  async openHomepageForAnswerConnectUK() {
    await Helper.launchBrowser(PropertiesFile.browserUrl.AnswerConnectUK);
    await Helper.click_on_element(this.PlansPricesForAnswerConnect, PropertiesFile.waitTime.maximumWait);
  }

  // AnswerConnect US
  get plans_And_Prices_btn_AC_US() {
    return $('(//a[text()=\'Plans & Pricing\'])[2]');
  }

  async openHomepage_AC_US() {
    await Helper.launchBrowser(PropertiesFile.browserUrl.AnswerConnectUs);
    await Helper.click_on_element(this.plans_And_Prices_btn_AC_US, PropertiesFile.waitTime.maximumWait);
  }

  // AnswerConnectCA
  get seePrices_button_AC_CA() {
    return $('(//a[text()=\'Plans & Pricing\'])[2]');
  }

  async openHomePage_AC_CA() {
    await Helper.launchBrowser(PropertiesFile.browserUrl.AnswerConncetCA);
    await Helper.click_on_element(this.seePrices_button_AC_CA, PropertiesFile.waitTime.maximumWait);
  }

  // AnswerForce us
  get seePrices_buttons() { return $('(//a[text()=\'See Prices\'])[2]'); }

  async openHomePageForAnswerForce() {
    await Helper.launchBrowser(PropertiesFile.browserUrl.AnswerForceUS);
    await Helper.click_on_element(this.seePrices_buttons, PropertiesFile.waitTime.maximumWait);
  }

  // AnswerForce(UK)
  get seePrices_btn_AF_UK() {
    return $('(//a[text()=\'See Pricing\'])[2]');
  }

  async openHomePageAnswerForceUK() {
    await Helper.launchBrowser(PropertiesFile.browserUrl.AnswerForceUK);
    await Helper.click_on_element(this.seePrices_btn_AF_UK, PropertiesFile.waitTime.maximumWait);
  }

  // AnswerFoce(CA)
  get seePrices_btn_AF_CA() {
    return $('(//a[text()=\'See Prices\'])[3]');
  }

  async openHomepageAF_CA() {
    await Helper.launchBrowser(PropertiesFile.browserUrl.AnswerForceCA);
    Helper.click_on_element(this.seePrices_btn_AF_CA, PropertiesFile.waitTime.maximumWait);
  }

  // LexReceptions
  get PlansPricesForLexReception() {
    return $('(//a[@class=\'button button--md button--solid-primary\'])');
  }

  async openHomePageForLexReception() {
    await Helper.launchBrowser(PropertiesFile.browserUrl.Lexreceptions);
    await Helper.click_on_element(this.PlansPricesForLexReception, PropertiesFile.waitTime.maximumWait);
  }

  // WellReceived
  get PlansPricesButtonForWellReceived() {
    return $('(//a[@class=\'btn btn--solid-dark mb-8-d mb-5 mb-6-m\'])');
  }

  async openHomePageForWellReceived() {
    await Helper.launchBrowser(PropertiesFile.browserUrl.Wellreceived);
    await Helper.click_on_element(this.PlansPricesButtonForWellReceived, PropertiesFile.waitTime.maximumWait);
  }

  // HelloSells
  get plansPrices_ButtonForHelloSells() {
    return $('(//a[text()=\'Plans & Pricing\'])[3]');
  }

  async openHomePageForHelloSells() {
    await Helper.launchBrowser(PropertiesFile.browserUrl.Wellreceived);
    await Helper.click_on_element(this.plansPrices_ButtonForHelloSells, PropertiesFile.waitTime.maximumWait);
  }
}

export default new HomePage();
