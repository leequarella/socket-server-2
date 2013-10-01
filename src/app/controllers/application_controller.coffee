class ApplicationController

  getParams: (req) ->
    url = require('url')
    url_parts = url.parse(req.url, true)
    query = url_parts.query

global.ApplicationController = ApplicationController
