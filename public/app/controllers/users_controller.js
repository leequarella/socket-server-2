(function() {
  var UsersController, _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  UsersController = (function(_super) {
    __extends(UsersController, _super);

    function UsersController() {
      _ref = UsersController.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    UsersController.prototype.index = function(req, response) {
      var _this = this;
      return Users.all(response, function(response, records) {
        return response.render("users/index", {
          records: records
        });
      });
    };

    UsersController.prototype.show = function(req, res) {
      var query;
      query = this.getParams(req);
      return Users.find(query.id, res, function(response, user) {
        return response.render("users/show", {
          user: user
        });
      });
    };

    UsersController.prototype["new"] = function(req, res) {
      var user;
      user = new User;
      return res.render("users/new", {
        user: user
      });
    };

    UsersController.prototype.save = function(req, response) {
      var user;
      user = new User(req.body);
      if (user.valid()) {
        return Users.save(user, response, function(respose) {
          return response.redirect("/users");
        });
      } else {
        return response.render("users/new", {
          user: user
        });
      }
    };

    UsersController.prototype.edit = function(req, response) {
      var query,
        _this = this;
      query = this.getParams(req);
      return Users.find(query.id, response, function(response, user) {
        return response.render("users/edit", {
          user: user
        });
      });
    };

    UsersController.prototype["delete"] = function(req, response) {
      var query,
        _this = this;
      query = this.getParams(req);
      return Users["delete"](query.id, response, function(response) {
        return response.redirect("/users");
      });
    };

    return UsersController;

  })(ApplicationController);

  global.UsersController = new UsersController;

}).call(this);
