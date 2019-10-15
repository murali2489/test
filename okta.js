const axios = require("axios");

const options = {
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: "SSWS 00sNfgmPZL4tOWk0CsQYGNzjCCcjT-6GCDSWLTsvNq"
  }
};

axios
  .post(
    "https://dev-976897.okta.com/api/v1/users",
    {
      profile: {
        firstName: "Sai",
        lastName: "Murali",
        email: "sdsds@mailinator.com",
        login: "sdsds@mailinator.com"
      },
      groupIds: ["00g1koyewfjFiglJ7357"]
    },
    options
  )
  .then(
    response => {
      console.log("Response");
      console.log(response.data);
    },
    error => {
      console.log("Exception.response");
      console.log(error.response.data);
    }
  );
