const EventEmitter = require("events");

class School extends EventEmitter {
  startPeriod() {
    console.log("Class Started");
    // Raise event when bell ring
    setTimeout(() => {
      this.emit("bellring", {
        period: "first",
        text: "period ended",
      });
    }, 3000);
  }
}

module.exports = School;
