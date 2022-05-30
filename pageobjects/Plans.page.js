import { assert } from "chai";

class ChoosePlan_Singup{

    get choose_planForAnswerForceUS(){ return $("(//*[@class='btn btn-fill full-btn'])[1]"); }
    get signUp_company_Name(){ return $("#companyName");}
    get signUp_conatct_Name(){ return $("#contactName");}
    get signUp_email (){return $("#email"); }
    get signUp_phone (){return $("#phone"); }

    //AnswerForce US
    async verify_All_RegistrationData_For_AnswerForce(expectCompanyName,expectContactName,expectEmail,expectPhone){

        await this.choose_planForAnswerForceUS.click();
       const companyName = await (await this.signUp_company_Name).getValue();
       const contactName = await (await this.signUp_conatct_Name).getValue();
       const email = await (await this.signUp_email).getValue();
       const phone = await (await this.signUp_phone).getValue();

    //    expect(companyName).toBe("Full"); --- validatations 
    //    expect(contactName).toBe("Ansari ");

        assert.equal(expectCompanyName,companyName);
        assert.equal(expectContactName,contactName); 
        assert.equal(expectEmail,email);
        assert.equal(expectPhone,phone); 
    }
    //AnswerForce Uk
    get ChoosePlan_AnswerForce_UK(){return $("(//a[text()='Choose'])[2]")}
    async verify_All_RegistrationData_For_AF_UK(){

        await (await this.ChoosePlan_AnswerForce_UK).click();
        const contactName = await (await this.signUp_conatct_Name).getValue();
        const email = await (await this.signUp_email).getValue();
        const phone = await (await this.signUp_phone).click();

        assert.equal("Ansari ",contactName); 
        assert.equal("jaminansari@gmail.com",email);
        assert.equal(7538812986,phone);
        }
        //AnswerForceCA
        get Chooseplan_AF_CA(){return $("(//a[text()='Choose'])[2]")}
        async verify_All_RegistrationData_For_AF_CA(){

            await (await this.Chooseplan_AF_CA).click();

       const companyName = await (await this.signUp_company_Name).getValue();
       const contactName = await (await this.signUp_conatct_Name).getValue();
       const email = await (await this.signUp_email).getValue();
       const phone = await (await this.signUp_phone).getValue();

       assert.equal("Full",companyName);
       assert.equal("Ansari ",contactName); 
       assert.equal("jaminansari@gmail.com",email);
       assert.equal(7538812986,phone); 
 }
     //AnswerConnect UK
    get choosePlan_ForAnswerConnect(){return $("(//a[text()='Sign up'])[1]")}
    verify_All_RegistrationData_For_AnswerConnectUK = async () =>{
   
        await (await this.choosePlan_ForAnswerConnect).click();
        const contactName = await (await this.signUp_conatct_Name).getValue();
        const email = await (await this.signUp_email).getValue();
        const phone = await (await this.signUp_phone).getValue();

        assert.equal("Ansari ",contactName);
        assert.equal("jaminansari@gmail.com",email);
        assert.equal(7538812986,phone);

     }

     //AnswerConnectUS
     get choosePlan_AC_US(){return $("(//a[text()='Sign up'])[1]")}
     async verify_All_RegistarionData_For_AC_US(){
        
        await (await this.choosePlan_AC_US).click();
         const contactName = await (await this.signUp_conatct_Name).getValue();
         const email = await (await this.signUp_email).getValue();
         const phone = await (await this.signUp_phone).getValue();

        assert.equal("Ansari",contactName);
        assert.equal("jaminansari@gmail.com",email);
        assert.equal(7538812986,phone);

}
     //AnswerConnect CA
     get choosePlan_AC_CA_button(){ return $("(//a[text()='Sign up'])[1]")}
     async verify_All_RegistrationData_For_AC_CA(){

        this.verify_All_RegistarionData_For_AC_US(); // AC (US) and AC (CA) both data verification method is same so i reuse(AC US) the that method 

     }

     //LexReceptions
     get choosePlan_ForLexReception(){return $("(//*[@class='button button--lg button--full-width w-100 button--ghost-primary'])[1]")}
     async verify_All_RegistrationData_For_LexReception(){

        await this.choosePlan_ForLexReception.click();
        const contactName = await(await this.signUp_conatct_Name).getValue();
        const companyName = await(await this.signUp_company_Name).getValue();
        const email = await(await this.signUp_email).getValue();
        const phone = await (await this.signUp_email).getValue();

        assert.equal("Ansari",contactName);
        assert.equal("Full",companyName);
        assert.equal("jaminansari@gmail.com",email);
        assert.equal(7538812986,phone); }

        //WellReceived
        get choosePlanButton_ForWellReceived(){return $("(//*[@class='btn btn--outline full-width'])[1]") }
        async verify_All_RegistrationData_For_WellReceived(){
        await (await this.choosePlanButton_ForWellReceived).click();

        const contactName = await (await this.signUp_conatct_Name).getValue();
        const email = await (await this.signUp_email).getValue();
        const phone = await (await this.signUp_phone).getValue();

        assert.equal("Ansari",contactName);
        assert.equal("jaminansari@gmail.com",email);
        assert.equal(7538812986,phone); 
    }
        //HelloSells
        get chooosePlansForHelloSells(){return $("(//a[text()='Sign Up'])[1]")}
        async verify_All_RegistrationData_For_HelloSells(){
        await (await this.chooosePlansForHelloSells).click();

        assert.equal("Ansari ",await (await this.signUp_conatct_Name).getValue());
        assert.equal("jaminansari@gmail.com",await (await this.signUp_email).getValue());
        assert.equal(7538812986,await (await this.signUp_phone).getValue());
         }
      }

export default new ChoosePlan_Singup();