class ClientsController
  setNickname: (socket, nickname) ->
    Logger.info "Nickname set #{nickname}"
    client = Clients.find(socket.id)
    client.setNickname nickname
    client.socket.broadcast.emit 'channel message', {userName: "Server", mes: nickname + ' has connected.'}

  joinChannel: (socket, channel)->
    Logger.info "Client joining channel #{channel}"
    client = Clients.find(socket.id)
    client.joinChannel channel

  disconnect: (socket) ->
    Logger.info "Client disconnected. #{socket.id}"
    io.sockets.in("authenticated")
      .emit('world', {message: "#{socket.id} has disconnected"}
    Clients.remove(socket.id)

  broadcast: (socket, message) ->
    Logger.info "Client Broadcasting #{socket.id}"
    client = Clients.find(socket.id)
    client.broadcast(message)

global.ClientsController = new ClientsController
