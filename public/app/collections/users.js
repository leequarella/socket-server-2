(function() {
  var Users,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Users = (function(_super) {
    __extends(Users, _super);

    function Users() {
      this.collection = "users";
    }

    Users.prototype.findByUserName = function(response, userName, callback) {
      var _this = this;
      return this.getCollection(function(collection) {
        return collection.find({
          userName: userName
        }).nextObject(function(err, record) {
          if (err) {
            throw err;
          }
          return callback(response, record);
        });
      });
    };

    return Users;

  })(LFCollection);

  global.Users = new Users;

}).call(this);
