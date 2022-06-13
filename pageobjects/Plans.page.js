/* eslint-disable linebreak-style */
/* eslint-disable quotes */
/* eslint-disable camelcase */
/* eslint-disable indent */
/* eslint-disable no-undef */
/* eslint-disable linebreak-style */
/* eslint-disable class-methods-use-this */
class Plans_Page {
  // Answerforce choose plan button elements (US ,UK , CA)
  // eslint-disable-next-line quotes
  get choose_planForAnswerForceUS() { return $("(//a[text()='Choose'])[1]"); }

  get ChoosePlan_AnswerForce_UK() { return $("(//a[text()='Choose'])[2]"); }

  get Chooseplan_AF_CA() { return $("(//a[text()='Choose'])[2]"); }

  // AnswerConnect choose plan button elements (US , UK , CA)
  get choosePlan_ForAnswerConnectUK() { return $("(//a[text()='Sign up'])[1]"); }

  get choosePlan_AC_US() { return $("(//a[text()='Sign up'])[1]"); }

  get choosePlan_AC_CA_button() { return $("(//a[text()='Sign up'])[1]"); }

  // lexreception choose plan button element
  get choosePlan_ForLexReception() { return $("(//a[text()='Sign up'])[1]"); }

  // well received choose plan button element
  get choosePlanButton_ForWellReceived() { return $("(//a[text()='Sign Up'])[1]"); }

  // Hello sells choose plan button element
  get chooosePlansForHelloSells() { return $("(//a[text()='Sign Up'])[1]"); }
}

 export default new Plans_Page();
