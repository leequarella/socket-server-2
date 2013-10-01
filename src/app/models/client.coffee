class Client
  constructor: (@socket) ->
    @id = @socket.id
    @userName = @id
    @joinChannel("global")

  secure: (user) ->
    @user = user
    @setUserName(user.userName)

  joinChannel: (channel) ->
    @socket.join(channel)

  leaveChannel: (channel) ->
    @socket.leave(channel)

  setUserName: (userName) -> @userName = userName

  broadcast: (channel, message) ->
    @socket.broadcast.to(channel)
      .emit("main/message", message: message)

global.Client = Client
