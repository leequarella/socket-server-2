(function() {
  var User,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  User = (function(_super) {
    __extends(User, _super);

    function User(data) {
      data = data || {};
      if (data._id) {
        this._id = this.ObjectID(data._id);
      }
      this.userName = data.userName;
      this.securePassword(data.password, data.passwordSalt);
      this.validatePassword(data.password, data.passwordConfirm);
    }

    User.prototype.securePassword = function(password, passwordSalt) {
      this.passwordSalt = passwordSalt || bcrypt.genSaltSync(10);
      return this.setPassword(password);
    };

    User.prototype.setPassword = function(password) {
      if (password && password.slice(0, 1) !== "$") {
        return this.password = this.hashPassword(password);
      } else {
        return this.password = password;
      }
    };

    User.prototype.hashPassword = function(password) {
      return bcrypt.hashSync(password, this.passwordSalt);
    };

    User.prototype.valid = function() {
      if (this.errors) {
        return false;
      } else {
        return true;
      }
    };

    User.prototype.validatePassword = function(password, passwordConfirm) {
      if (!password) {
        this.errors = "Password cannot be blank.";
        return false;
      }
      if (password.slice(0, 1) === "$") {
        this.errors = "Password cannot start with a symbol.";
        return false;
      }
      if (password !== passwordConfirm) {
        this.errors = "Passwords do not match.";
        return false;
      }
    };

    User.prototype.authenticate = function(password) {
      if (this.hashPassword(password) === this.password) {
        return true;
      } else {
        return false;
      }
    };

    return User;

  })(LFModel);

  global.User = User;

}).call(this);
