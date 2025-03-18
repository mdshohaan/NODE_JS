/*
 * Application routes system
 */
// dependecies
const { sampleHandler } = require("./handlers/routeHandlers/samplehandler");

const routes = {
  sample: sampleHandler,
};

module.exports = routes;
