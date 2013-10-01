(function() {
  app.get('/client/socket_junk.js', function(req, res) {
    return res.sendfile("client/socket_junk.js");
  });

  app.get('/client/ui.js', function(req, res) {
    return res.sendfile("client/ui.js");
  });

  app.get('/client/init.js', function(req, res) {
    return res.sendfile("client/init.js");
  });

  app.get('/client/world.js', function(req, res) {
    return res.sendfile("client/world.js");
  });

  app.get('/client/input.js', function(req, res) {
    return res.sendfile("client/input.js");
  });

  app.get('/client/loading_image.js', function(req, res) {
    return res.sendfile("client/loading_image.js");
  });

  app.get('/client/lib/spin.min.js', function(req, res) {
    return res.sendfile("client/lib/spin.min.js");
  });

  app.get('/client/player_characters.js', function(req, res) {
    return res.sendfile("client/player_characters.js");
  });

  app.get('/client/stylesheets/application.css', function(req, res) {
    return res.sendfile("client/stylesheets/application.css");
  });

  app.get('/', function(req, res) {
    return WelcomeController.index(req, res);
  });

  app.get('/users', function(req, res) {
    return UsersController.index(req, res);
  });

  app.get('/users/show', function(req, res) {
    return UsersController.show(req, res);
  });

  app.get('/users/new', function(req, res) {
    return UsersController["new"](req, res);
  });

  app.post('/users/save', function(req, res) {
    return UsersController.save(req, res);
  });

  app.get('/users/edit', function(req, res) {
    return UsersController.edit(req, res);
  });

  app.get('/users/delete', function(req, res) {
    return UsersController["delete"](req, res);
  });

}).call(this);
