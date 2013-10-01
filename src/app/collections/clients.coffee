class Clients
  constructor: ->
    @list = {}

  add: (client) -> @list[client.id] = client

  find: (id) -> client = @list[id]

  remove: (id) -> delete @list[id]

global.Clients = new Clients
