// Event Module
const School = require("./school");

const school = new School();
// Register a listner for bellring event
school.on("bellring", ({ period, text }) => {
  console.log(`We need to run because ${period} ${text}`);
});
school.startPeriod();
// Raise an event
//emitter.emit("bellring");
