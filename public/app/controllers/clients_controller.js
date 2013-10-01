(function() {
  var ClientsController;

  ClientsController = (function() {
    function ClientsController() {}

    ClientsController.prototype.setNickname = function(socket, nickname) {
      var client;
      Logger.info("Nickname set " + nickname);
      client = Clients.find(socket.id);
      client.setNickname(nickname);
      return client.socket.broadcast.emit('channel message', {
        userName: "Server",
        mes: nickname + ' has connected.'
      });
    };

    ClientsController.prototype.joinChannel = function(socket, channel) {
      var client;
      Logger.info("Client joining channel " + channel);
      client = Clients.find(socket.id);
      return client.joinChannel(channel);
    };

    ClientsController.prototype.disconnect = function(socket) {
      Logger.info("Client disconnected. " + socket.id);
      return Clients.remove(socket.id);
    };

    ClientsController.prototype.broadcast = function(socket, message) {
      var client;
      Logger.info("Client Broadcasting " + socket.id);
      client = Clients.find(socket.id);
      return client.broadcast(message);
    };

    return ClientsController;

  })();

  global.ClientsController = new ClientsController;

}).call(this);
