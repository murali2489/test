const axios = require("axios");
const okta = require("@okta/okta-sdk-nodejs");

let creds = {
  username: "krishnamurali2489@gmail.com",
  password: "Yasha@89",
  options: {
    multiOptionalFactorEnroll: true,
    warnBeforePasswordExpired: true
  }
};

const client = new okta.Client({
  orgUrl: "https://dev-976897.okta.com",
  token: "00sNfgmPZL4tOWk0CsQYGNzjCCcjT-6GCDSWLTsvNq" // Obtained from Developer Dashboard
});

const cnaClient = new okta.Client({
  orgUrl: "https://cnapreview-external.okta.com",
  token: "00GqcObyfjAOpaNSTIjAhrV0WXCl7FDfj-uRONE4L0" // Obtained from Developer Dashboard
});

const options = {
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: "SSWS 00sNfgmPZL4tOWk0CsQYGNzjCCcjT-6GCDSWLTsvNq"
  }
};

const user = {
  profile: {
    firstName: "Sai",
    lastName: "Murali",
    email: "muralisai24899@mailinator.com",
    login: "muralisai24899@mailinator.com"
  },
  groupIds: ["00g1koyewfjFiglJ7357"]
};

const cnaUser = {
  profile: {
    firstName: "Sai",
    lastName: "Murali",
    email: "muralisai24899@mailinator.com",
    login: "muralisai24899@mailinator.com"
  },
  groupIds: ["00g21kpdg2VDi8a55297"]
};

cnaClient
  .createUser(cnaUser)
  .then(user => {
    console.log("Created user", user.status);
  })
  .catch(exception => {
    console.log("Exception is " + exception.message);
  });
/* axios
  .post(
    "https://dev-976897.okta.com/api/v1/users",
    {
      profile: {
        firstName: "Sai",
        lastName: "Murali",
        email: "sdsds@mailinator.com",
        login: "sdsds@mailinator.com"
      },
      groupIds: ["00g1koyewfjFiglJ7357"]
    },
    options
  )
  .then(
    response => {
      console.log("Response");
      console.log(response.data);
    },
    error => {
      console.log("Exception.response");
      console.log(error.response.data);
    }
  );
 */


https://dev-649469.okta.com/oauth2/default/v1/authorize?client_id=0oa13cs1yxYAdLC0g357&response_type=code&scope=offline_access&sessionToken=20111q7ZM_z9Eldrb64IERJN-AuMKG30Kes1aExaMcSs5DZAtY7JDri&redirect_uri=https://oidcdebugger.com/debug&state=IL&nonce=cna