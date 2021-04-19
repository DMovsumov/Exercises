const Router = require('@koa/router');
const router = new Router();
const fs = require('fs')
const usersData = require('../../data/data.json')

router.get('/', async (ctx) => {
    const data = fs.readFileSync('../../data/data.json');
    const users = JSON.parse(data)

    console.log(users)

    ctx.body = 'users'
})

module.exports = router.routes()