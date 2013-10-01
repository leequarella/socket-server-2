(function() {
  var ApplicationController;

  ApplicationController = (function() {
    function ApplicationController() {}

    ApplicationController.prototype.getParams = function(req) {
      var query, url, url_parts;

      url = require('url');
      url_parts = url.parse(req.url, true);
      return query = url_parts.query;
    };

    return ApplicationController;

  })();

  global.ApplicationController = ApplicationController;

}).call(this);
