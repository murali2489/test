const btoa = require('btoa');
var http = require('follow-redirects').http;
const _ = require('lodash');
const config = require('@labskit/config');
var request = config.httpsProxy ?
  require('request-promise-native').defaults({
    proxy: config.httpsProxy,
    strictSSL :true
  }) : require('request-promise-native');
  let mytoken="";


  
let authURL = "https://dev-976897.okta.com/api/v1/authn";
let codeURL="https://dev-976897.okta.com/oauth2/default/v1/authorize";

var propertiesObject = { 
  client_id:'0oa1lk6a10fia2O7j357', 
  "response_type":'code',
  scope:"openid",
  sessionToken:mytoken,
  "redirect_uri":"http://localhost:9001/implicit/callback",
  "state":"IL",
  nonce:"cna"
};

const requestConfig = {
  headers:{
    Accept: "application/json",
    "Content-Type": "application/json"
  },
  body: {
username: "BalReddy.Tippireddy@cna.com",
  password: "Gaga#2k19",
  options: {
      multiOptionalFactorEnroll: true,
      warnBeforePasswordExpired: true
    }
  },
  uri: authURL,
  method: 'POST',
  json: true
};

/* const requestConfig1 = {
  followAllRedirects: true,
  headers:{
    Accept: "application/json",
    "Content-Type": "application/json"
  },
  qs:propertiesObject,
  uri: codeURL,
  method: 'GET',
  json: true
};
 */


let authHeaders = {
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
};

let creds = {
username: "BalReddy.Tippireddy@cna.com",
  password: "Gaga#2k19",
  options: {
    multiOptionalFactorEnroll: true,
    warnBeforePasswordExpired: true
  }
};

/* axios.post(authURL, creds, authHeaders).then(response => {
  console.log(response.data);
});
 */

return new Promise((resolve, reject) => {
  request(requestConfig)
    .then(response => {
    console.log(response.sessionToken);
    }).catch(reject=>{
      console.log(reject);
      
    });



    
});
