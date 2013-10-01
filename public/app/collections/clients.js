(function() {
  var Clients;

  Clients = (function() {
    function Clients() {
      this.list = {};
    }

    Clients.prototype.add = function(client) {
      return this.list[client.id] = client;
    };

    Clients.prototype.find = function(id) {
      var client;

      return client = this.list[id];
    };

    Clients.prototype.remove = function(id) {
      return delete this.list[id];
    };

    return Clients;

  })();

  global.Clients = new Clients;

}).call(this);
