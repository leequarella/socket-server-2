(function() {
  var ServerInitializer;

  ServerInitializer = (function() {
    function ServerInitializer(port) {
      this.port = port;
      this.express = require('express');
      this.MongoStore = require('mong.socket.io');
      this.http = require('http');
      console.log("STARTING SERVER");
      this.startExpress();
      this.startSocketIO();
      this.startStaticService();
    }

    ServerInitializer.prototype.startExpress = function() {
      console.log(" ...preparing express server.");
      return global.app = this.express();
    };

    ServerInitializer.prototype.startSocketIO = function() {
      console.log(" ...preparing http for socket.io");
      global.server = this.http.createServer(app);
      global.io = require('socket.io').listen(server);
      server.listen(this.port);
      console.log(" ...listening for sockets and http transactions on port " + port);
      return this.setupMongoSocketStorage();
    };

    ServerInitializer.prototype.setupMongoSocketStorage = function() {
      var store;
      console.log("...configuring sockets to work with mongo.");
      store = new this.MongoStore({
        url: "mongodb://" + db_connection.host + ":" + db_connection.port + "/" + db_connection.name
      });
      store.on("error", console.error);
      return io.set('store', store);
    };

    ServerInitializer.prototype.startStaticService = function() {
      console.log(" ...preparing to serve static assets");
      app.set('view engine', 'jade');
      app.use(this.express.bodyParser());
      return console.log("..done.");
    };

    return ServerInitializer;

  })();

  new ServerInitializer(port);

}).call(this);
