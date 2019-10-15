const EventEmitter = require("events");

class Event extends EventEmitter {
  raiseAnEvent(event, message) {
    console.log("Below event message registered");
    console.log("\n" + message);

    this.emit(event, message);
  }
}

module.exports = Event;
