const Router = require('@koa/router');
const router = new Router();
const fs = require('fs')
const path = require('path')

router.get('/', async (ctx) => {
    const data = fs.readFileSync(path.join(__dirname, '../../data/', 'data.json'));
    const users = JSON.parse(data)

    ctx.body = users
})

module.exports = router.routes()