/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
/* eslint-disable camelcase */
/* eslint-disable class-methods-use-this */
class Signup_Add_Ons {
  // element for edit plans and add ons
  get edit_plans_and_explore_addOns_option() { return $('#change-plan-button'); }

  get additional_service() { return $("//h4[text()='Additional services']"); }

  get fax_message_delivery() { return $('#name_701'); }

  get live_chat() { return $('##name_91901'); }

  get update_my_plans() { return $('#make_plan_changes'); }

  // payment details elements
  get card_number() { return $('#credit-card-number'); }

  get expiration_month() { return $('expiration-month'); }

  get expiration_year() { return $('#expiration-year'); }

  get cvv() { return $('#cvv'); }

  get postalCode() { return $('#postal-code'); }

  get checkbox() { return $("//button[@class='checkbox-btn'][1]"); }

  get payNow_button() { return $('#submit'); }

  async choose_addOns() {
    await (await this.edit_plans_and_explore_addOns_option).click();
    await (await this.additional_service).click();
    await (await this.fax_message_delivery).click();
    await (await this.live_chat).click();
    await (await this.update_my_plans).click();
  }

  // eslint-disable-next-line no-unused-vars
  async makePayment(cardNumber, expireMonth, expireYear, cvv, postalcode) {
    await (await this.card_number).setValue(cardNumber);
    await (await this.expiration_month).setValue(expireMonth);
    await (await this.expiration_year).setValue(expireYear);
    await this.cvv.setValue(cvv);
    await (await this.checkbox).click();
    await (await this.payNow_button).click();
  }
}

export default new Signup_Add_Ons();
