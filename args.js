// Generated by CoffeeScript 1.8.0
(function() {
  exports.parseArgs = function() {
    var lastKey, nextIsValue, oneArg, options, result, _, _ref;
    options = {
      '-b': 'local_address',
      '-l': 'local_port',
      '-s': 'server',
      '-r': 'remote_port',
      '-k': 'password',
      '-c': 'config_file',
      '-m': 'method'
    };
    result = {};
    nextIsValue = false;
    lastKey = null;
    _ref = process.argv;
    for (_ in _ref) {
      oneArg = _ref[_];
      if (nextIsValue) {
        if (result[lastKey]) {
          if (!(result[lastKey] instanceof Array)) {
            result[lastKey] = [result[lastKey]];
          }
          result[lastKey].push(oneArg);
        } else {
          result[lastKey] = oneArg;
        }
        nextIsValue = false;
      } else if (oneArg in options) {
        lastKey = options[oneArg];
        nextIsValue = true;
      }
    }
    return result;
  };

  exports.version = "shadowsocks-heroku v0.9.7";

}).call(this);
