const config = require('@labskit/config');

var request = config.httpsProxy ?
  require('request-promise-native').defaults({
    proxy: config.httpsProxy,
    strictSSL :true
  }) : require('request-promise-native');

let authURL = "https://cnapreview-external.okta.com/api/v1/authn";

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
}


let authHeaders = {
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
};


return new Promise((resolve, reject) => {
  request(requestConfig)
    .then(response => {
    console.log(response)
    }).catch(reject=>{

      console.log(reject);
      
    });
});
