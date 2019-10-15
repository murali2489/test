const EventEmitter = require("events");
const event = new EventEmitter();
const Event = require("./EventClass");

event.addListener("Guests have arrived", guest => {
  console.log(
    "Everyone get ready, guests are coming, Below are the guest details\n\n\n\n"
  );
  console.log(guest);
});

event.emit("Guests have arrived", {
  Guest1: "Murali",
  Guest2: "Gayathri",
  Guest3: "Sai Karthika"
});

const evt = new Event();

evt.on("alphax", creds => {
  console.log("Roger Message Recieved");
  console.log(creds);
});

evt.raiseAnEvent("alphax", { username: "jackryder", password: "aristocrat" });
