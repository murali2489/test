const btoa = require('btoa');
var http = require('follow-redirects').http;
const _ = require('lodash');
const config = require('@labskit/config');
var request = config.httpsProxy ?
  require('request-promise-native').defaults({
    proxy: config.httpsProxy,
    
  }) : require('request-promise-native');
  
  let mytoken="";
  
let codeURL="https://dev-976897.okta.com/oauth2/default/v1/authorize";

var propertiesObject = { 
  client_id:'0oa1lk6a10fia2O7j357', 
  "response_type":'code',
  scope:"openid",
  sessionToken:"20111TsNAVQ1JogpH1wBPjEfBPu6QkWvPKp6AXvgTwKGBEnrTh14kU1",
  "redirect_uri":"http://localhost:8923",
  "state":"IL",
  nonce:"cna"
};


const requestConfig1 = {
  
  headers:{
    Accept: "application/json",
    "Content-Type": "application/json"
  },
  qs:propertiesObject,
  uri: codeURL,
  method: 'GET',
  json: true
};


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


/* request({url:codeURL,headers: {
    'Accept':"application/json" ,
    'Content-Type': "application/json"
  }, qs:propertiesObject}, function(err, response, body) {
    if(err) { console.log(err); return; }
    console.log("Get response: " + JSON.stringify(response));
  });
 */

const querystring = require('querystring');
const urlQueryString = querystring.stringify(propertiesObject);

/* request('https://dev-976897.okta.com/oauth2/default/v1/authorize?' + urlQueryString , authHeaders,
function (error, response, body) {
if(error){
    log("error")
}else {
    console.log(response);
    
}
});
 */

const options = {
    followAllRedirects: false,
    method: 'GET',
    uri: 'https://dev-976897.okta.com/oauth2/default/v1/authorize',
    qs: {
        client_id:'0oa1lk6a10fia2O7j357', 
        "response_type":'code',
        scope:"openid",
        sessionToken:"20111Kq13wyf1x05JYBYLgn0ffZ27mk5i8InsNChXwry7zrFmbo_5OQ",
        "redirect_uri":"http://localhost:9001",
        "state":"IL",
        nonce:"cna"
          },
    headers: {
        'Accept':"application/json" ,
        'Content-Type': "application/json"
             }
  }

request(options)
  .then(function (response) {
    console.log("**********************response***************************************");   
   console.log(response);
  })
  .catch(function (err) {
    console.log("**********************error***************************************");   
    console.log(err);
  });