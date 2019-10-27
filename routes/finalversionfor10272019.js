const btoa = require("btoa");
const _ = require("lodash");

const request = require("request-promise");
let mytoken = "";
let authCode = "";
let isAuthCode = false;

let codeURL = "https://dev-976897.okta.com/oauth2/default/v1/authorize";
let authURL = "https://dev-976897.okta.com/api/v1/authn";

let tokenURL = "https://dev-976897.okta.com/oauth2/default/v1/token";

const username = "0oa1lk6a10fia2O7j357";
const password = "SCurriD1rIxHXVxTA2d4YVYZCu424XTFmqHEmdGA";

const basicAuth = "Basic  " + btoa(username + ":" + password);

const tokenConfig = {
  resolveWithFullResponse: true,
  timeout: 5000,
  headers: {
    Authorization: basicAuth,
    "Content-Type": "application/x-www-form-urlencoded",
    Accept: "application/json"
  },
  qs: {
    grant_type: "authorization_code",
    redirect_uri: "https://oidcdebugger.com/debug",
    code: authCode
  },
  uri: tokenURL,
  method: "POST",
  json: true
};

const requestConfig = {
  timeout: 5000,
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
  json: true,
  resolveWithFullResponse: true
};

let tk = "";

const options = {
  timeout: 5000,
  resolveWithFullResponse: true,
  followAllRedirects: false,
  method: "GET",
  uri: codeURL,
  qs: {
    client_id: "0oa1lk6a10fia2O7j357",
    response_type: "code",
    scope: "openid",
    sessionToken: tk,
    redirect_uri: "https://oidcdebugger.com/debug",
    state: "IL",
    nonce: "cna"
  },
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
};

request(requestConfig)
  .then(response => {
    options.qs.sessionToken = response.body.sessionToken;
    request(options)
      .then(function(response) {
        let parsedString = response.request.uri.path;
        if (parsedString.includes("code=")) {
          isAuthCode = true;
        }
        authCode = parsedString
          .substring(
            parsedString.lastIndexOf("code") + 1,
            parsedString.lastIndexOf("&")
          )
          .slice(4);
        tokenConfig.qs.code = authCode;
        request(tokenConfig)
          .then(function(response) {
            console.log(response.body.access_token);
          })
          .catch(function(reject) {
            if (isAuthCode === false) {
              console.log("OKTA002");
              console.log(
                "Login Service is down\n" +
                  "Please try again later. If the problem Persists please contact Service Desk @ 1-800-CNA-2000"
              );
            } else if (reject.response) {
              let code = reject.response.body.error;

              if (code && code === "invalid_grant") {
                console.log("OKTA006");
                console.log(
                  "Login Service is down\n" +
                    "Please try again later. If the problem Persists please contact Service Desk @ 1-800-CNA-2000"
                );
              }
            } else {
              console.log("OKTA005");
              console.log(
                "Login Service is down\n" +
                  "Please try again later. If the problem Persists please contact Service Desk @ 1-800-CNA-2000"
              );
            }
          });
      })
      .catch(reject => {
        if (reject.response) {
          let code = reject.response.body.error;
          if (code && code === "invalid_grant") {
            console.log("OKTA002");
            console.log(
              "Login Service is down\n" +
                "Please try again later. If the problem Persists please contact Service Desk @ 1-800-CNA-2000"
            );
          } else {
            console.log("OKTA004");
            console.log(
              "Login Service is down\n" +
                "Please try again later. If the problem Persists please contact Service Desk @ 1-800-CNA-2000"
            );
          }
        } else {
          console.log("OKTA004");
          console.log(
            "Login Service is down\n" +
              "Please try again later. If the problem Persists please contact Service Desk @ 1-800-CNA-2000"
          );
        }
      });
  })
  .catch(reject => {
    if (reject.response) {
      let code = reject.response.body.errorCode;
      if (code && code === "E0000004") {
        console.log("OKTA001");
        console.log("Username or Password is Incorrect");
      }
    } else {
      console.log("OKTA003");
      console.log(
        "Login Service is down\n" +
          "Please try again later. If the problem Persists please contact Service Desk @ 1-800-CNA-2000"
      );
    }
  });
