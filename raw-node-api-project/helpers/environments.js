// Environments related things

const environments = {};

environments.stagging = {
  port: 3000,
  envName: "stagging",
};
environments.production = {
  port: 3000,
  envName: "production",
};

// determine which environment was pass
const currentEnvironment =
  typeof process.env.NODE_ENV === "string" ? process.env.NODE_ENV : "stagging";

// export corresponding environment object
const environmentToObj =
  typeof environments[currentEnvironment] === "object"
    ? environments[currentEnvironment]
    : environments.stagging;

module.exports = environmentToObj;
