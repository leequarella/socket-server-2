class LFSocketController
  renderTemplate: (pathToTemplate, data) ->
    jade = require('jade')
    template = require('fs').readFileSync(pathToTemplate, 'utf8')
    jadeFn = jade.compile(template, { filename: pathToTemplate, pretty: true })
    renderedTemplate = jadeFn(data)

global.LFSocketController = LFSocketController
