class LFModel
  ObjectID: require('mongodb').ObjectID

  set_id: (_id) ->
    if typeof _id == "object"
      return _id
    else
      new @ObjectId(_id)

  isReadyToSave: -> true

global.LFModel = LFModel
