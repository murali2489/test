async function fetchUserandRepo() {
  const user = await getUser(25);
  console.log(user);

  const repo = await getRepository(user);
  console.log(repo);
}

fetchUserandRepo();

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
      resolve(respository);
    }, 2000);
  });
}
