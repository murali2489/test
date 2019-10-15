const p = new Promise(function(resolve, reject) {
  setTimeout(() => {
    resolve({
      id: 1,
      user: "Murali Srinivasan",
      github: "www.murali.github.com",
      repositories: [
        "https://github.com/murali2489/vidlyapi.git",
        "https://github.com/murali2489/Heroku.git",
        "https://github.com/murali2489/test.git",
        "https://github.com/murali2489/thirumudi.git"
      ]
    });
  }, 3000);
});

//p.then(result => console.log(result));

const q = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("An Exception occured during the database operation");
  }, 2000);
});

q.catch(ex => {});

/* q.then(result => console.log(result)).catch(exception =>
  console.log("Gracefully catching the exception message " + exception)
);
 */

getUser(1).then(result => {
  console.log("We got the user object from the db");
  console.log(result);
  getRepository(result).then(result => {
    console.log("we got the list of repositories from the user object");
    console.log(result);
  });
});

function getUser(id) {
  return new Promise((resolve, reject) => {
    console.log(
      "Please wait while retrieving the user from db, it may take five seconds"
    );
    setTimeout(() => {
      resolve({
        id: id,
        user: "Murali Srinivasan",
        github: "www.murali.github.com"
      });
    }, 2000);
  });
}

function getRepository(user) {
  console.log(
    "Please wait while retrieving the repo for the user from db, it may take five seconds"
  );
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const respository = { ...user };
      respository["repositories"] = [
        "https://github.com/murali2489/vidlyapi.git",
        "https://github.com/murali2489/Heroku.git",
        "https://github.com/murali2489/test.git",
        "https://github.com/murali2489/thirumudi.git"
      ];
      resolve(respository.repositories[3]);
    }, 2000);
  });
}

/* 
function getRepository(user, callback) {
  setTimeout(() => {
    callback({
      id: user.id,
      user: "Murali Srinivasan",
      github: "www.murali.github.com",
      repositories: [
        "https://github.com/murali2489/vidlyapi.git",
        "https://github.com/murali2489/Heroku.git",
        "https://github.com/murali2489/test.git",
        "https://github.com/murali2489/thirumudi.git"
      ]
    });
  }, 2000);
}
 */
