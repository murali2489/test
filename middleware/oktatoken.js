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
let codeURL="https://dev-976897.okta.com/oauth2/default/v1/token";

const username = "0oa1lk6a10fia2O7j357";
const password = "SCurriD1rIxHXVxTA2d4YVYZCu424XTFmqHEmdGA";

const basicAuth = 'Basic  ' + btoa(username + ':' + password);


const requestConfig = {
    headers: {
      'Authorization': basicAuth,
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept': 'application/json'
    },
    qs: {
      'grant_type': "authorization_code",
      "redirect_uri":"http://localhost:8923",
      'code': "H9QD-knUSRO-xqXI4AQA"
    },
    uri: codeURL, 
    method: 'POST',
    json: true
  };


  request(requestConfig)
  .then(function (response) {
   console.log(response);
  })
  .catch(function (err) {
    console.log(err);
  });

