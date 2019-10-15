const axios = require("axios");

let authURL = "https://dev-976897.okta.com/api/v1/authn";
let createURL = "https://dev-976897.okta.com/api/v1/users";

let userCreationBody = {
  profile: {
    firstName: "Murali",
    lastName: "Srinivasan",
    email: "krishnamurali2489@gmail.com",
    login: "krishnamurali2489@gmail.com"
  },
  groupIds: ["00g21kpdg2VDi8a55297"]
};

let AuthorizationCode = {
  client_id: "0oa1koo1o60Klae9a357",
  redirect_uri: "http://localhost:3006/implicit/callback",
  scope: "openid"
};

let config = {
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: "SSWS 00sNfgmPZL4tOWk0CsQYGNzjCCcjT-6GCDSWLTsvNq"
  }
};

let authHeaders = {
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
};

let headers = {
  Accept: application / json,
  "Content-Type": application / json,
  Authorization: "SSWS 00sNfgmPZL4tOWk0CsQYGNzjCCcjT-6GCDSWLTsvNq"
};

let creds = {
  username: "krishnamurali2489@gmail.com",
  password: "Yasha@89",
  options: {
    multiOptionalFactorEnroll: true,
    warnBeforePasswordExpired: true
  }
};

function testOktav1() {
  return new Promise((resolve, reject) => {
    resolve(axios.get("https://dev-976897.okta.com/api/v1/groups", config));
  });
}

//testOktav1().then(response => console.log(response));
/* testAuthorization()
  .then(response => console.log(response.data.sessionToken))
  .catch(exception => console.log("Exception catched" + exception));
 */
/* createUsers().then(response =>
  console.log(response.data).catch(ex => {
    console.log("Exception");
  })
);
 */
function testAuthorization() {
  return new Promise((resolve, reject) => {
    resolve(
      axios.post(authURL, creds, authURL).catch(exception => {
        console.log(exception.response.data);
      })
    );
    reject(exception);
  });
}

function createUsers() {
  return new Promise((resolve, reject) => {
    resolve(
      axios.post(createURL, creds, {
        profile: {
          firstName: "Sai",
          lastName: "Murali",
          email: "saimuralikarthika@mailinator.com",
          login: "saimuralikarthika@mailinator.com"
        },
        groupIds: ["00g1koyewfjFiglJ7357"]
      })
    );
    reject("exception");
  });
}

function testuserCreation() {
  console.log("Inside my method");

  axios
    .post(createURL, creds, {
      profile: {
        firstName: "Sai",
        lastName: "Murali",
        email: "saimuralikarthika@mailinator.com",
        login: "saimuralikarthika@mailinator.com"
      },
      groupIds: ["00g1koyewfjFiglJ7357"]
    })
    .then("here")
    .catch("here1");
}

try {
  testuserCreation();
} catch (exception) {
  console.log("exception");
}
