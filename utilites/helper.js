/* eslint-disable linebreak-style */
/* eslint-disable camelcase */
/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
/* eslint-disable class-methods-use-this */
class Helper {
  // browser.waitUntil(condtions, {timeout ,timeout message ,,interval})

  async launchBrowser(path) {
    await browser.maximizeWindow();
    await browser.url(path);
  }

  async click_on_element(element, time) {
    await element.waitForDisplayed({ timeout: time });
    await element.click();
  }

  async setValue_on_element(element, text, time) {
    await element.waitForDisplayed({ timeout: time });
    await element.clearValue();
    await element.setValue(text);
  }

  async getText_on_element(element) {
    await element.waitForDisplayed({ timeout: time });
    const received_text = await element.getText();
    return received_text;
  }

  async getValue_on_element(element, time) {
    await element.waitForDisplayed({ timeout: time });
    const received_value = await element.getValue();
    return received_value;
  }

  async handleAlert(option) {
    if (option === accept) {
      await browser.acceptAlert();
    } else if (option === cancel) {
      await browser.dismissAlert();
    }
  }

  // async dropDown(element, option, value, time) {
  //   await element.waitForDisplayed({ timeout: time });

  //   if (option === 'text') {
  //     await element.selectByVisibleText(value);
  //   } else if (option === 'index') {
  //     await element.selectByIndex(value);
  //   } else if (option === 'Attribute') {
  //     await element.selectByAttribute(atribute value);
  //   }
  // }
}

export default new Helper();
