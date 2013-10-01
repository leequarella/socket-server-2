class @Ui
  constructor: ->
    @setObservers()

  setObservers: ->
    $("#login").click =>         @login()

  login: ->
    userName = $("#userName").val()
    password = $("#password").val()
    ClientSocket.login(userName, password)

  loginSuccess: ->
    $("#loginForm").hide()
    $("#title").html "Logged in successfully."

  loginFailed: ->
    $("#title").html "Failed to log in."

  displayWorldMessage: (message) ->
    $("#globalTraffic")
      .append(document.createTextNode(message))
      .append("<br>")
    $('#globalTraffic').scrollTop($('#worldMessages').prop("scrollHeight"))

  mainWindowRender: (html) ->
    $("#main").html html

  mainWindowAppend: (message) ->
    $("#main").append message
    $("#main").append "<br>"
    $("#main").append "<br>"
    $('#main').scrollTop($('#main').prop("scrollHeight"))

  reset: ->
    $("#main").html ""
    $("#title").html ""

  gettingCharacters: ->
    new LoadingImage(target: "main", message: "Getting character list...")

#######
  setNickname: ->
    nickname = $("#name").val()
    ClientSocket.setNickname(nickname)

  displayMessage: (who, message)->
    html = $("#messages").html()
    html += "<br><b>" + who + ":</b> " + message
    $("#messages").html(html).scrollTop($("#messages").outerHeight())

  clearMessageBox: -> $("#message").val("")

  sendMessage: ->
    message = $("#message").val()
    ClientSocket.broadcast message
    @clearMessageBox()

  displayChannel: (channel) ->
    $("#channelName").html("Channel #{channel}")
