// Note that requiring this module installs global.babelHelpers.
// require("babel-runtime");

// var runtime = module.exports = babelHelpers;

var runtime = exports;

runtime.sanitizeForInObject = function (obj) {
  if (Array.isArray(obj)) {
    var newObj = {};
    var keys = Object.keys(obj);
    var keyCount = keys.length;
    for (var i = 0; i < keyCount; ++i) {
      var key = keys[i];
      newObj[key] = obj[key];
    }
    return newObj;
  }

  return obj;
};
