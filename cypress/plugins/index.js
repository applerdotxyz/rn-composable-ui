// const { addMatchImageSnapshotPlugin } = require('cypress-image-snapshot/plugin');

// module.exports = (on, config) => {
//   addMatchImageSnapshotPlugin(on, config);
// };

const { initPlugin } = require('cypress-plugin-snapshots/plugin');

module.exports = (on, config) => {
  initPlugin(on, config);
  return config;
};