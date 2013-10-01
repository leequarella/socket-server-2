(function() {
  $(function() {
    window.Ui = new Ui;
    window.ClientSocket = new ClientSockets;
    return window.Input = new Input;
  });

}).call(this);
