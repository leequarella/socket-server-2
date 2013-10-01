(function() {
  var DatabaseConnection;

  DatabaseConnection = (function() {
    function DatabaseConnection() {
      this.dbUrl = "mongodb://" + db_connection.host + ":" + db_connection.port + "/" + db_connection.name;
      this.dbClient = require("mongodb").MongoClient;
      this.connect();
    }

    DatabaseConnection.prototype.connect = function() {
      return this.dbClient.connect(this.dbUrl, function(err, db) {
        if (err) {
          throw err;
        }
        global.Db = db;
        return console.log("Connected to database.");
      });
    };

    return DatabaseConnection;

  })();

  new DatabaseConnection;

}).call(this);
