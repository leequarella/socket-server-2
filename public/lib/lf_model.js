(function() {
  var LFModel;

  LFModel = (function() {
    function LFModel() {}

    LFModel.prototype.ObjectID = require('mongodb').ObjectID;

    LFModel.prototype.set_id = function(_id) {
      if (typeof _id === "object") {
        return _id;
      } else {
        return new this.ObjectId(_id);
      }
    };

    LFModel.prototype.isReadyToSave = function() {
      return true;
    };

    return LFModel;

  })();

  global.LFModel = LFModel;

}).call(this);
