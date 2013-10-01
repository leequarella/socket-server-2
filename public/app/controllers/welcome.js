(function() {
  var WelcomeController;

  WelcomeController = (function() {
    function WelcomeController() {}

    WelcomeController.prototype.index = function(req, res) {
      res.render("index");
      return io.sockets["in"](req.body.channel).emit(req.body.message_type, {
        message: req.body.message
      });
    };

    return WelcomeController;

  })();

  global.WelcomeController = new WelcomeController;

}).call(this);
