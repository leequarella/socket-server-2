class Area extends LFModel
  constructor: (data) ->
    @que = 0
    data = data || {}
    @_id = @set_id(data._id) if data._id
    @name = data.name
    @description = data.description
    @adjacentAreas = data.adjacentAreas || {}
    @startingArea = data.startingArea || false

  isReadyToSave: ->
    if @que == 0
      true
    else
      false

  addAdjacentAreas: (directions, _ids) ->
    i = 0
    if directions.typeof == 'array'
      for direction in directions
        continue if direction == ""
        @addAdjacentArea(_ids[i], direction)
        i += 1
    else
      @addAdjacentArea(_ids, directions)

  addAdjacentArea: (_id, direction) ->
    @que += 1
    Areas.find _id, null, (response, area) =>
      @adjacentAreas[_id] =
        _id: _id
        name: area.name
        direction: direction
      @que -= 1

  findAdjacent_idByDirection: (direction) ->
    for id, area of @adjacentAreas
      Logger.debug direction
      return area._id if area.direction.toLowerCase() == direction

global.Area = Area
