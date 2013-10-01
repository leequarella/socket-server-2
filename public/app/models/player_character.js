(function() {
  var PlayerCharacter,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  PlayerCharacter = (function(_super) {
    __extends(PlayerCharacter, _super);

    function PlayerCharacter(data) {
      data = data || {};
      if (data._id) {
        this._id = this.ObjectID(data._id.toString());
      }
      this.user_id = data.user_id;
      this.name = data.name;
      this.currentArea_id = data.currentArea_id;
    }

    PlayerCharacter.prototype.plop = function(response, callback) {
      var _this = this;
      return Areas.findStartingArea(response, function(response, area) {
        return _this.setCurrentArea(area, response, callback);
      });
    };

    PlayerCharacter.prototype.setCurrentArea = function(area, response, callback) {
      this.currentArea_id = area._id;
      return PlayerCharacters.save(this, response, callback);
    };

    return PlayerCharacter;

  })(LFModel);

  global.PlayerCharacter = PlayerCharacter;

}).call(this);
