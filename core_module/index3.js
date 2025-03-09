// Event Module
const EventEmitter = require("events");
const emitter = new EventEmitter();

// Register a listner for bellring event
emitter.on("bellring", ({ period, text }) => {
  console.log(`We need to run because ${period} ${text}`);
});

// Raise an event
//emitter.emit("bellring");
setTimeout(() => {
  emitter.emit("bellring", {
    period: "first",
    text: "period ended",
  });
}, 3000);
