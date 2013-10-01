(function() {
  var Logger;

  Logger = (function() {
    function Logger() {}

    Logger.prototype.info = function(message) {
      return console.log(">>>>>>>>> " + message + " <<<<<<<<<");
    };

    Logger.prototype.debug = function(message) {
      console.log("==================================");
      console.log(message);
      return console.log("==================================");
    };

    return Logger;

  })();

  global.Logger = new Logger;

}).call(this);
