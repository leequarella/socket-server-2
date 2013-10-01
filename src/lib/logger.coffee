class Logger
  info: (message) ->
    console.log ">>>>>>>>> " + message + " <<<<<<<<<"

  debug: (message) ->
    console.log "=================================="
    console.log message
    console.log "=================================="

global.Logger = new Logger
