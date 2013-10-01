class SessionsController
  new: (socket)->
    Logger.info "Client connected."
    client = new Client(socket)
    Clients.add(client)

  create: (socket, data) ->
    Logger.info "Client attempting to log in."
    Users.findByUserName socket, data.userName, (socket, record) =>
      if record
        user = new User(password: record.password, passwordSalt: record.passwordSalt)
        if user.authenticate(data.password)
          @success(socket, record)
        else
          @fail(socket)
      else
        @fail(socket)

  success: (socket, user) ->
    client = Clients.find(socket.id)
    client.joinChannel("authenticated")
    client.secure(user)
    client.socket.emit("loginResponse", {login: "success"})
    io.sockets.in("authenticated")
      .emit("world", {message: "#{client.userName} has joined."})

  fail: (socket) ->
    socket.emit("loginResponse", {login: "fail"})

global.SessionsController = new SessionsController
