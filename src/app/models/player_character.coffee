class PlayerCharacter extends LFModel
  constructor: (data) ->
    data = data || {}
    @_id = @ObjectID(data._id.toString()) if data._id
    @user_id = data.user_id
    @name = data.name
    @currentArea_id = data.currentArea_id

  plop: (response, callback) ->
    Areas.findStartingArea response,
      (response, area) => @setCurrentArea(area, response, callback)

  setCurrentArea: (area, response, callback) ->
    @currentArea_id = area._id
    PlayerCharacters.save(@, response, callback)


global.PlayerCharacter = PlayerCharacter
