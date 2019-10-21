const axios = require("axios");
let authURL = "https://dev-976897.okta.com/api/v1/authn";

let authHeaders = {
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
};

let creds = {
  username: "krishnamurali2489@gmail.com",
  password: "Yasha@89",
  options: {
    multiOptionalFactorEnroll: true,
    warnBeforePasswordExpired: true
  }
};

axios.post(authURL, creds, authHeaders).then(response => {
  console.log(response.data);
});
