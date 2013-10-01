class ServerInitializer
  constructor: (port) ->
    @port = port
    @express = require 'express'
    @MongoStore = require 'mong.socket.io'
    @http = require 'http'
    console.log "STARTING SERVER"
    @startExpress()
    @startSocketIO()
    @startStaticService()

  startExpress: ->
    console.log " ...preparing express server."
    global.app = @express()

  startSocketIO: ->
    console.log " ...preparing http for socket.io"
    global.server = @http.createServer(app)
    global.io = require('socket.io').listen(server)
    server.listen @port
    console.log " ...listening for sockets and http transactions on port #{port}"
    @setupMongoSocketStorage()

  setupMongoSocketStorage: ->
    console.log "...configuring sockets to work with mongo."
    store = new @MongoStore(
      url:
        "mongodb://#{db_connection.host}:#{db_connection.port}/#{db_connection.name}")
    store.on("error", console.error)
    io.set('store', store)

  startStaticService: ->
    console.log " ...preparing to serve static assets"
    app.set('view engine', 'jade')
    app.use @express.bodyParser()
    console.log "..done."

new ServerInitializer(port)
