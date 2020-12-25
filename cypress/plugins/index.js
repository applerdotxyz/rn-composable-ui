// plugins/index.js
// eslint-disable-next-line @typescript-eslint/no-var-requires
require("dotenv").config();

module.exports = (on, config) => {
  for (let key in process.env) {
    // copy any needed variables from process.env to config.env
    config.env[key] = process.env[key];
  }

  // do not forget to return the changed config object!
  return config;
};
