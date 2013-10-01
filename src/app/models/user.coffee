class User extends LFModel
  constructor: (data) ->
    data = data || {}
    @_id = @ObjectID(data._id) if data._id
    @userName = data.userName
    @securePassword(data.password, data.passwordSalt)
    @validatePassword(data.password, data.passwordConfirm)

  securePassword: (password, passwordSalt) ->
    @passwordSalt = passwordSalt || bcrypt.genSaltSync(10)
    @setPassword(password)

  setPassword: (password) ->
    #passwords starting with $ have already been hash
    if password && password.slice(0, 1) != "$"
      @password = @hashPassword(password)
    else
      @password = password

  hashPassword: (password)->
    bcrypt.hashSync(password, @passwordSalt)

  valid: ->
    if @errors
      false
    else
      true

  validatePassword: (password, passwordConfirm) ->
    if !password
      @errors = "Password cannot be blank."
      return false
    if password.slice(0, 1) == "$"
      @errors = "Password cannot start with a symbol."
      return false
    if password != passwordConfirm
      @errors = "Passwords do not match."
      return false

  authenticate: (password) ->
    if @hashPassword(password) == @password
      true
    else
      false

global.User = User
