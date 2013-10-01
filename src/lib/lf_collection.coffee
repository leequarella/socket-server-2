class LFCollection
  ObjectID: (id) ->
    if typeof id == "object"
      return id
    else
      objectId = require('mongodb').ObjectID
      new objectId(id)

  getCollection: (callback) ->
    Db.createCollection @collection, (err, collection) =>
      throw err if err
      callback(collection)

  all: (res, callback) ->
    @getCollection (collection) =>
      collection.find().toArray (err, records) =>
        throw err if err
        callback(res, records)

  find: (id, response, callback) ->
    @getCollection (collection) =>
      collection.find(_id: @ObjectID(id)).nextObject (err, record) =>
        throw err if err
        callback(response, record)

  save: (obj, response, callback) ->
    if obj.isReadyToSave()
      @getCollection (collection) =>
        collection.save obj, (err, records) ->
          throw err if err
          callback(response)
    else
      setTimeout (=> @save(obj, response, callback)), 10

  update: (params, response, callback) ->
    _id = params._id
    delete params._id
    @getCollection (collection) =>
      collection.update {_id: new @ObjectID(_id)}, {$set: params},
        (err, record) =>
          throw err if err
          callback(response, record)

  delete: (id, response, callback) ->
    @getCollection (collection) =>
      collection.remove {_id: new @ObjectID(id)},
        (err) =>
          throw err if err
          callback(response)

global.LFCollection = LFCollection
