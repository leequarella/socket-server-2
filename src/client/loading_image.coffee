class @LoadingImage
  constructor: (data) ->
    @target = $("#" + data.target)
    @message = data.message || ""
    @opts =
      lines: 12, # The number of lines to draw
      length: 7, # The length of each line
      width: 4, # The line thickness
      radius: 10, # The radius of the inner circle
      color: '#222', # #rgb or #rrggbb
      speed: 1, # Rounds per second
      trail: 60, # Afterglow percentage
      shadow: true # Whether to render a shadow
      className: "spinning"
    @render()

  render: ->
    spinner = new Spinner(@opts).spin(div)
    div = $("<div />").attr("class", "spinner")
    message_div = "<div class='spinner_message'>" + @message + "</div>"
    div.html(spinner.el).append(message_div)
    @old_html = @target.html()
    @target.html(div)

  remove:  ->
    @target.html(@old_html)

  changeMessage: (message) ->
    @message = message
    $(".spinner #message").html @message
