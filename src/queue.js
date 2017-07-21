
const defaultQueue = {
  run: [],
  only: [],
};

module.exports = {
  describe: Object.assign(defaultQueue),
  context: Object.assign(defaultQueue),
  it: Object.assign(defaultQueue),
};
