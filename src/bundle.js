module.exports = function (mod) {
  require('./routes')(mod);
  require('./pages/bundle')(mod);
};
