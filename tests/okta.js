const axios =require ("axios");
const okta = require("@okta/okta-sdk-nodejs");
let authURL = "https://cnapreview-external.okta.com/api/v1/authn";

let creds = {
  username: "BalReddy.Tippireddy@cna.com",
  password: "Gaga#2k19",
  options: {
    multiOptionalFactorEnroll: true,
    warnBeforePasswordExpired: true
  }
};

let headers = {
    Accept: "application/json",
    "Content-Type":"application/json",
    Authorization: "SSWS 00GqcObyfjAOpaNSTIjAhrV0WXCl7FDfj-uRONE4L0"
  };
  

  
let authHeaders = {
    Accept: "application/json",
    "Content-Type":"application/json"
  };
  


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

const cnaUser = {
  profile: {
    firstName: "BalReddy",
    lastName: "Tippireddy",
    email: "BalReddy.Tippireddy@cna.com",
    login: "BalReddy.Tippireddy@cna.com"
  },
  groupIds: ["00g21kpdg2VDi8a55297"]
};

/* cnaClient
  .createUser(cnaUser)
  .then(user => {
    console.log("Created user", user.status);
  })
  .catch(exception => {
    console.log("Exception is " + exception.errorCode);
  }); */
  process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;
  axios.post(authURL, creds,authHeaders)
  .then(Response=>{
      console.log(Response)
  })
  .catch(Exception=>{

    console.log(Exception);
    
  });



