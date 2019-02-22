const userController = require('../controller/user')

module.exports = (router) => {
  // find all users
  router.get('/api/v2/user', userController.user)
}
