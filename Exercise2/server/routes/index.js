const Router = require('@koa/router')

const router = new Router()

router.use('/users', require('./users/index'))

module.exports = router