class @ClientSockets
  constructor: (channel) ->
    @socket = io.connect()
    @setSocketListeners()

  setSocketListeners: ->
    @socket.on 'loginResponse', (data) => @loginResponse(data)
    @socket.on 'world',         (data) => @worldMessage(data)
    @socket.on 'main/message',(data) => Ui.mainWindowAppend(data.message)

  login: (userName, password) ->
    @socket.emit("login", {userName: userName, password: password})

  loginResponse: (data) ->
    if data.login == "success"
      @loginSuccess()
    else
      Ui.loginFailed()

  loginSuccess: () ->
    Ui.loginSuccess()

  worldMessage: (data) ->
    Ui.displayWorldMessage(data.message)

#######
  setChannel: (channel) ->
    @socket.emit("change channel", {channel: channel})
    @channel = channel
    Ui.displayChannel(channel)

  setNickname: (nickname) ->
    @socket.emit("set nickname", {nickname: nickname})

  broadcast: (message) ->
    @socket.emit('broadcast', { message: message })
    Ui.displayMessage($("#name").val(), message)
