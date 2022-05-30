
class HomePage{

       //AnswerForce (US)
       get seePrices_buttons(){ return $("(//*[@class='btn btn-fill btn-lg mr-8'])") }
       
       async openHomePageForAnswerForce (){

            await  browser.maximizeWindow();
            browser.url("https://tesing-answerforcewebsite.appspot.com/");
            console.log("navigation is sucessful");
            (await this.seePrices_buttons).click();
        }

        //AnswerForce(UK)
       get seePrices_btn_AF_UK(){ return $("(//a[text()='See Pricing'])[2]")}
       async openHomePageAnswerForceUK(){

             await browser.maximizeWindow();
              await browser.url("https://tesing-answerforcewebsite.appspot.com/uk");
              await (await this.seePrices_btn_AF_UK).click();
              
       }

       //AnswerFoce(CA)
       get seePrices_btn_AF_CA(){ return $("(//a[text()='See Prices'])[3]")}
       async openHomepageAF_CA(){
              browser.maximizeWindow();
              browser.url("https://tesing-answerforcewebsite.appspot.com/ca/");
              //this.clickSeePrices();
              await (await this.seePrices_btn_AF_CA).click();
       }

        //AnswerConnect (UK)
        get PlansPricesForAnswerConnect(){return $("(//a[text()='Plans & Pricing'])[2]")}
        async openHomepageForAnswerConnectUK(){

              browser.maximizeWindow();
              browser.url("https://testing-anctuk.appspot.com/");
              (await this.PlansPricesForAnswerConnect).click();
       }

       //AnswerConnect US
       get plans_And_Prices_btn_AC_US(){return $("(//a[text()='Plans & Pricing'])[2]")}
       async openHomepage_AC_US(){

              browser.maximizeWindow();
              browser.url("https://staging-answerconnectus.appspot.com/");
              (await this.plans_And_Prices_btn_AC_US).click();
       }

       //AnswerConnectCA
       get seePrices_button (){ return $("(//a[text()='Plans & Pricing'])[2]")}
       async openHomePage_AC_CA(){

              browser.maximizeWindow();
              browser.url("https://staging-answerconnectus.appspot.com/ca/");
              (await this.seePrices_button).click();
       }

       //LexReceptions
       get PlansPricesForLexReception(){return $("(//*[@class='button button--md button--solid-primary'])")}
       async openHomePageForLexReception(){

              browser.maximizeWindow();
              await browser.url("https://lex-reception.appspot.com/");
              await (await this.PlansPricesForLexReception).click();
       }
      
       //WellReceived
       get PlansPricesButtonForWellReceived(){return $("(//*[@class='btn btn--solid-dark mb-8-d mb-5 mb-6-m'])")}
       async openHomePageForWellReceived(){

              browser.maximizeWindow();
              browser.url("https://wellreceived-staging.appspot.com/");
             await (await this.PlansPricesButtonForWellReceived).click()
             }

       //HelloSells      
       get plansPrices_ButtonForHelloSells(){return $("(//a[text()='Plans & Pricing'])[3]")} 
       async openHomePageForHelloSells(){

              browser.maximizeWindow();
              browser.url("https://staging-hellosells.appspot.com/");
             await (await this.plansPrices_ButtonForHelloSells).click();

       }
}

export default new HomePage();


