function getUser(id, callback) {
  setTimeout(() => {
    callback({
      id: id,
      user: "Murali Srinivasan",
      github: "www.murali.github.com"
    });
  }, 3000);
}

getUser(1, function(user) {
  console.log(user);
  getRepository(user, function(repositories) {
    console.log(repositories);
  });
});

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
