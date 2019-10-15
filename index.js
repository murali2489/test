const products = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//function sayHello() {}

const value = products.filter(filtereditem => filtereditem != 5);

const value1 = products.map(e => `<List value= ${e}>`);

const family = {
  father: "srinivasan",
  mother: "kaveri",
  son: "murali",
  inlaw: "gayathri",
  granddaugher: "sai karthika",
  sayHello() {
    console.log("Say Hi " + sayHi());
  }
};

sayHi(function(number) {
  console.log(number);
});

function sayHi(callback) {
  setTimeout(() => {
    callback(5);
  }, 1000);
}
