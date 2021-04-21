const Router = require('@koa/router');
const router = new Router();
const fs = require('fs')
const path = require('path')

router.get('/', async (ctx) => {
    try {
        const data = fs.readFileSync(path.join(__dirname, '../../data/', 'data.json'));
        const users = JSON.parse(data)

        ctx.body = users
    } catch (e) {
        ctx.body = 'error'
    }
})

.delete('/:id', async (ctx) => {
    try {
        const { id } = ctx.params
        const data = fs.readFileSync(path.join(__dirname, '../../data/', 'data.json'));
        const users = JSON.parse(data)

        const index = users.findIndex(item => item.id === Number(id))
        users.splice(index, 1)

        /** Запись обновленных юзеров в файл */
        // fs.writeFile(path.join(__dirname, '../../data/', 'data.json'), JSON.stringify(users), () => console.log('Write success'))

        ctx.body = users
    } catch (e) {
        ctx.body = 'Delete Error'
    }
})

module.exports = router.routes()