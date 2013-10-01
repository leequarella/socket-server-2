class Users extends LFCollection
  constructor: ->
    @collection = "users"

  findByUserName: (response, userName, callback) ->
    @getCollection (collection) =>
      collection.find(userName: userName).nextObject (err, record) =>
        throw err if err
        callback(response, record)

global.Users = new Users
