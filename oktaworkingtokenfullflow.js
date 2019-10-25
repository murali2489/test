const btoa = require("btoa");
const _ = require("lodash");
const axios = require("axios");
const request = require("request-promise");
let authCode = "";

let mytoken = "";
let authURL = "https://dev-976897.okta.com/api/v1/authn";

let codeURL = "https://dev-976897.okta.com/oauth2/default/v1/authorize";
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
    redirect_uri: "http://localhost:3006",
    code: authCode
  },
  uri: tokenURL,
  method: "POST",
  json: true
};

var propertiesObject = {
  client_id: "0oa1lk6a10fia2O7j357",
  response_type: "code",
  scope: "openid",
  sessionToken: "20111_RYRyBXGSGTfqb-FEj9VqvW6uVF0WvBYIr1khJ65xhXLQ2ybbx",
  redirect_uri: "http://localhost:8923",
  state: "IL",
  nonce: "cna"
};

const requestConfig1 = {
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  },
  qs: propertiesObject,
  uri: codeURL,
  method: "GET",
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

const querystring = require("querystring");
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
const requestConfig = {
  headers: {
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
  method: "POST",
  json: true
};

const options = {
  followAllRedirects: false,
  method: "GET",
  uri: "https://dev-976897.okta.com/oauth2/default/v1/authorize",
  qs: {
    client_id: "0oa1lk6a10fia2O7j357",
    response_type: "code",
    scope: "openid",
    sessionToken: mytoken,
    redirect_uri: "http://localhost:3006",
    state: "IL",
    nonce: "cna"
  },
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
};

return new Promise((resolve, reject) => {
  request(requestConfig)
    .then(response => {
      mytoken = response.sessionToken;
      axios
        .get("https://dev-976897.okta.com/oauth2/default/v1/authorize", {
          params: {
            client_id: "0oa1lk6a10fia2O7j357",
            response_type: "code",
            scope: "openid",
            sessionToken: mytoken,
            redirect_uri: "http://localhost:3006",
            state: "IL",
            nonce: "cna"
          },
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          }
        })
        .then(function(response) {
          let parsedString =
            response.request.socket._httpMessage.socket._httpMessage.path;
          authCode = parsedString
            .substring(
              parsedString.lastIndexOf("code") + 1,
              parsedString.lastIndexOf("&")
            )
            .slice(4);

          tokenConfig.qs.code = authCode;

          request(tokenConfig)
            .then(function(response) {
              console.log(response.access_token);
            })
            .catch(function(err) {
              console.log("err");
            });
        })
        .catch(function(error) {
          console.log(error);
        });
    })
    .catch(reject => {
      console.log(reject);
    });
}); /* 
request(options)
  .then(function(response) {
    console.log(
      "**********************response***************************************"
    );
    console.log(response.);
  })
  .catch(function(err) {
    console.log(
      "**********************error***************************************"
    );
    console.log(err.options);
  });
 */

/* axios
  .get("https://dev-976897.okta.com/oauth2/default/v1/authorize", {
    params: {
      client_id: "0oa1lk6a10fia2O7j357",
      response_type: "code",
      scope: "openid",
      sessionToken: "20111DZhid4Fgy7dr7UJ--OW7iQ1wYPsfaTWAsL4lCEh7C-e__k_OnT",
      redirect_uri: "https://oidcdebugger.com/debug",
      state: "IL",
      nonce: "cna"
    },
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  })
  .then(function(response) {
    console.log(response.request._events[_eventsCount]);
  })
  .catch(function(error) {
    console.log(error);
  });

 */
