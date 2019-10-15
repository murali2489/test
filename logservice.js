function log(message) {
  console.log("Message logged : " + message);
}

function log1(message) {
  console.log("Message logged1 : " + message);
}

function log2(message) {
  console.log("Message logged2 : " + message);
}

function log3(message) {
  console.log("Message logged3 : " + message);
}

module.exports.myExport = log3;

console.log(module);
