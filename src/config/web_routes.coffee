#client static assets
app.get '/client/socket_junk.js',   (req, res) -> res.sendfile("client/socket_junk.js")
app.get '/client/ui.js',            (req, res) -> res.sendfile("client/ui.js")
app.get '/client/init.js',          (req, res) -> res.sendfile("client/init.js")
app.get '/client/world.js',         (req, res) -> res.sendfile("client/world.js")
app.get '/client/input.js',         (req, res) -> res.sendfile("client/input.js")
app.get '/client/loading_image.js', (req, res) -> res.sendfile("client/loading_image.js")
app.get '/client/lib/spin.min.js',  (req, res) -> res.sendfile("client/lib/spin.min.js")
app.get '/client/player_characters.js', (req, res) -> res.sendfile("client/player_characters.js")

app.get '/client/stylesheets/application.css', (req, res) -> res.sendfile("client/stylesheets/application.css")

#web routes
app.get  '/',                   (req, res) -> WelcomeController.index(req, res)

app.get  '/users',              (req, res) -> UsersController.index(req, res)
app.get  '/users/show',         (req, res) -> UsersController.show(req, res)
app.get  '/users/new',          (req, res) -> UsersController.new(req, res)
app.post '/users/save',         (req, res) -> UsersController.save(req, res)
app.get  '/users/edit',         (req, res) -> UsersController.edit(req, res)
app.get  '/users/delete',       (req, res) -> UsersController.delete(req, res)
