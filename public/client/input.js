(function() {
  this.Input = (function() {
    function Input() {
      var _this = this;
      $("#input").keypress(function(event) {
        if (event.charCode === 13) {
          return _this.submit();
        }
      });
    }

    Input.prototype.submit = function() {
      var input;
      input = $("#input input").val();
      ClientSocket.socket.emit("action", {
        input: input
      });
      return this.clear();
    };

    Input.prototype.clear = function() {
      return $("#input input").val("");
    };

    return Input;

  })();

}).call(this);
