(function() {
  io.sockets.on('connection', function(socket) {
    SessionsController["new"](socket);
    socket.on('login', function(data) {
      return SessionsController.create(socket, data);
    });
    socket.on('broadcast', function(data) {
      return ClientsController.broadcast(socket, data.message);
    });
    return socket.on('disconnect', function() {
      return ClientsController.disconnect(socket);
    });
  });

}).call(this);
