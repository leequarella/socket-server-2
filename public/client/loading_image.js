(function() {
  this.LoadingImage = (function() {
    function LoadingImage(data) {
      this.target = $("#" + data.target);
      this.message = data.message || "";
      this.opts = {
        lines: 12,
        length: 7,
        width: 4,
        radius: 10,
        color: '#222',
        speed: 1,
        trail: 60,
        shadow: true,
        className: "spinning"
      };
      this.render();
    }

    LoadingImage.prototype.render = function() {
      var div, message_div, spinner;

      spinner = new Spinner(this.opts).spin(div);
      div = $("<div />").attr("class", "spinner");
      message_div = "<div class='spinner_message'>" + this.message + "</div>";
      div.html(spinner.el).append(message_div);
      this.old_html = this.target.html();
      return this.target.html(div);
    };

    LoadingImage.prototype.remove = function() {
      return this.target.html(this.old_html);
    };

    LoadingImage.prototype.changeMessage = function(message) {
      this.message = message;
      return $(".spinner #message").html(this.message);
    };

    return LoadingImage;

  })();

}).call(this);
