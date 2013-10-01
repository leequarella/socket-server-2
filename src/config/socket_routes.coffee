#socket routes
io.sockets.on 'connection', (socket) ->
  SessionsController.new(socket)
  socket.on 'login',         (data) -> SessionsController.create(socket, data)

  socket.on 'broadcast',     (data) -> ClientsController.broadcast(socket, data.message)
  socket.on 'disconnect',           -> ClientsController.disconnect(socket)
