(function() {
  var LFSocketController;

  LFSocketController = (function() {
    function LFSocketController() {}

    LFSocketController.prototype.renderTemplate = function(pathToTemplate, data) {
      var jade, jadeFn, renderedTemplate, template;

      jade = require('jade');
      template = require('fs').readFileSync(pathToTemplate, 'utf8');
      jadeFn = jade.compile(template, {
        filename: pathToTemplate,
        pretty: true
      });
      return renderedTemplate = jadeFn(data);
    };

    return LFSocketController;

  })();

  global.LFSocketController = LFSocketController;

}).call(this);
