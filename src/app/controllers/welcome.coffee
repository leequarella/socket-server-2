class WelcomeController
  index: (req, res) ->
    res.render("index")
    io.sockets.in(req.body.channel)
      .emit(req.body.message_type, { message: req.body.message })

global.WelcomeController = new WelcomeController
