(function() {
  var Area,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Area = (function(_super) {
    __extends(Area, _super);

    function Area(data) {
      this.que = 0;
      data = data || {};
      if (data._id) {
        this._id = this.set_id(data._id);
      }
      this.name = data.name;
      this.description = data.description;
      this.adjacentAreas = data.adjacentAreas || {};
      this.startingArea = data.startingArea || false;
    }

    Area.prototype.isReadyToSave = function() {
      if (this.que === 0) {
        return true;
      } else {
        return false;
      }
    };

    Area.prototype.addAdjacentAreas = function(directions, _ids) {
      var direction, i, _i, _len, _results;
      i = 0;
      if (directions["typeof"] === 'array') {
        _results = [];
        for (_i = 0, _len = directions.length; _i < _len; _i++) {
          direction = directions[_i];
          if (direction === "") {
            continue;
          }
          this.addAdjacentArea(_ids[i], direction);
          _results.push(i += 1);
        }
        return _results;
      } else {
        return this.addAdjacentArea(_ids, directions);
      }
    };

    Area.prototype.addAdjacentArea = function(_id, direction) {
      var _this = this;
      this.que += 1;
      return Areas.find(_id, null, function(response, area) {
        _this.adjacentAreas[_id] = {
          _id: _id,
          name: area.name,
          direction: direction
        };
        return _this.que -= 1;
      });
    };

    Area.prototype.findAdjacent_idByDirection = function(direction) {
      var area, id, _ref;
      _ref = this.adjacentAreas;
      for (id in _ref) {
        area = _ref[id];
        Logger.debug(direction);
        if (area.direction.toLowerCase() === direction) {
          return area._id;
        }
      }
    };

    return Area;

  })(LFModel);

  global.Area = Area;

}).call(this);
