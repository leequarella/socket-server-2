class DatabaseConnection
  constructor: ->
    @dbUrl = "mongodb://#{db_connection.host}:#{db_connection.port}/#{db_connection.name}"
    @dbClient = require("mongodb").MongoClient
    @connect()

  connect: ->
    @dbClient.connect @dbUrl, (err, db)->
      throw err if err
      global.Db = db
      console.log "Connected to database."

new DatabaseConnection
