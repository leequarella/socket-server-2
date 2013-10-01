global.port = process.env.PORT || 3001

require("./config/database_connection_info")
require("./config/initializers/server")
require("./config/initializers/database")
require("./config/routes")

require("fs").readdirSync("./lib").forEach (file) ->
 require("./lib/" + file)

require("fs").readdirSync("./app/models").forEach (file) ->
 require("./app/models/" + file)
require("fs").readdirSync("./app/collections").forEach (file) ->
 require("./app/collections/" + file)
require("fs").readdirSync("./app/controllers").forEach (file) ->
 require("./app/controllers/" + file)


global.bcrypt = require('bcrypt')
