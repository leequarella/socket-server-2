(function() {
  var Client;

  Client = (function() {
    function Client(socket) {
      this.socket = socket;
      this.id = this.socket.id;
      this.userName = this.id;
      this.joinChannel("global");
    }

    Client.prototype.secure = function(user) {
      this.user = user;
      return this.setUserName(user.userName);
    };

    Client.prototype.joinChannel = function(channel) {
      return this.socket.join(channel);
    };

    Client.prototype.leaveChannel = function(channel) {
      return this.socket.leave(channel);
    };

    Client.prototype.setUserName = function(userName) {
      return this.userName = userName;
    };

    Client.prototype.broadcast = function(channel, message) {
      return this.socket.broadcast.to(channel).emit("main/message", {
        message: message
      });
    };

    return Client;

  })();

  global.Client = Client;

}).call(this);
