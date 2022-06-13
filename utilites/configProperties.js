/* eslint-disable linebreak-style */
class PropertiesFile {
  browserUrl = {

    AnswerConnectUK: ' http://testing-anctuk.appspot.com/',
    AnswerConnectUs: 'https://staging-answerconnectus.appspot.com',
    AnswerConncetCA: 'https://staging-answerconnectus.appspot.com/ca',

    AnswerForceUK: 'https://tesing-answerforcewebsite.appspot.com/uk',
    AnswerForceUS: 'https://tesing-answerforcewebsite.appspot.com/',
    AnswerForceCA: 'http://tesing-answerforcewebsite.appspot.com/ca',

    Lexreceptions: 'http://lex-reception.appspot.com',
    Hellosells: 'http://staging-hellosells.appspot.com',
    Wellreceived: 'https://wellreceived-staging.appspot.com/',

  };

  // This data will be stored in registration page
  registration_TestData = {

    RegistrationName: 'Ansari',
    RegistrationEmail: 'jaminansari@gmail.com',
    RegistrationPhone: '7538812986',
    RegistrationCompanyName: 'Full',

  };

  waitTime = {
    maximumWait: 10000, // this time for waitForDisplay(for helper class time parameter)
  };
}

export default new PropertiesFile();
