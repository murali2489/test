const btoa = require('btoa');
var http = require('follow-redirects').http;
const _ = require('lodash');
const config = require('@labskit/config');
var request = config.httpsProxy ?
  require('request-promise-native').defaults({
    proxy: config.httpsProxy,
    
  }) : require('request-promise-native');
  
  let mytoken="";
  let authCode = "";
  
let codeURL="https://dev-976897.okta.com/oauth2/default/v1/authorize";
let authURL = "https://dev-976897.okta.com/api/v1/authn";

let tokenURL = "https://dev-976897.okta.com/oauth2/default/v1/token";

const username = "0oa1lk6a10fia2O7j357";
const password = "SCurriD1rIxHXVxTA2d4YVYZCu424XTFmqHEmdGA";

const basicAuth = "Basic  " + btoa(username + ":" + password);


const tokenConfig = {
  headers: {
    Authorization: basicAuth,
    "Content-Type": "application/x-www-form-urlencoded",
    Accept: "application/json"
  },
  qs: {
    grant_type: "authorization_code",
    redirect_uri: "https://oidcdebugger.com/debug",
    code: authCode,
  },
  uri: tokenURL,
  method: "POST",
  json: true
};

var propertiesObject = { 
  client_id:'0oa1lk6a10fia2O7j357', 
  "response_type":'code',
  scope:"openid",
  sessionToken:"20111_HD0jrP7F-8U7yNrQrafIXdvyUH0nfXXpV_D02HAP4OAzEUToO",
  "redirect_uri":"http://localhost:8923",
  "state":"IL",
  nonce:"cna"
};

const requestConfig = {
  headers:{
    Accept: "application/json",
    "Content-Type": "application/json"
  },
  body: {
    username: "krishnamurali2489@gmail.com",
    password: "Yasha@89",
    options: {
      multiOptionalFactorEnroll: true,
      warnBeforePasswordExpired: true
    }
  },
  uri: authURL,
  method: 'POST',
  json: true
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

let tk = "";


const options = {
  resolveWithFullResponse: true,
    followAllRedirects:false,
    method: 'GET',
    uri: 'https://dev-976897.okta.com/oauth2/default/v1/authorize',
    qs: {
        client_id:'0oa1lk6a10fia2O7j357', 
        "response_type":'code',
        scope:"openid",
        sessionToken:tk,
        "redirect_uri":"https://oidcdebugger.com/debug",
        "state":"IL",
        nonce:"cna"
          },
    headers: {
        'Accept':"application/json" ,
        'Content-Type': "application/json"
             }
  }

  request(requestConfig)
  .then(response => {
  console.log(response.sessionToken);
  options.qs.sessionToken=response.sessionToken;
  console.log(options);
  
  request(options)
  .then(function (response) {
    console.log("**********************response***************************************");   
     let parsedString = response.request.uri.path;
  authCode = parsedString
    .substring(
      parsedString.lastIndexOf("code") + 1,
      parsedString.lastIndexOf("&")
    )
    .slice(4)
   console.log(authCode);
   tokenConfig.qs.code = authCode;
   console.log(tokenConfig);
   request(tokenConfig)
     .then(function(response) {
       console.log(response.access_token);
     })
     .catch(function(err) {
       console.log(err);
     });
  })
  }).catch(reject=>{
    console.log(reject);
    
  });
/* 
request(options)
  .then(function (response) {
    console.log("**********************response***************************************");   
   console.log(response.headers);
  })
  .catch(function (err) {
    console.log("**********************error***************************************");   
    //console.log(err.options);
    console.log("err");
  }); */