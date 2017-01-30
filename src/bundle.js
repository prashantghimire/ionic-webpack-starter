module.exports = function (mod) {
  require('./run')(mod);
  require('./routes')(mod);
  require('./pages/bundle')(mod);
};
