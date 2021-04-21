const Router = require('@koa/router');
const router = new Router();
const fs = require('fs')
const koaBody = require('koa-body')
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
        fs.writeFile(path.join(__dirname, '../../data/', 'data.json'), JSON.stringify(users), () => console.log('Write success'))

        ctx.body = users
    } catch (e) {
        ctx.body = 'Delete Error'
    }
})

.post('/', koaBody(), async (ctx) => {
    try {
        const { body } = ctx.request

        const data = fs.readFileSync(path.join(__dirname, '../../data/', 'data.json'));
        const users = JSON.parse(data)

        users.push({id: users.length + 1, ...body})
        fs.writeFile(path.join(__dirname, '../../data/', 'data.json'), JSON.stringify(users), () => console.log('Write success'))

        ctx.body = users
    } catch (e) {
        ctx.body = 'Post Error'
    }
})

.put('/:id', koaBody(), async (ctx) => {
    try {
        const { id } = ctx.params
        const { body } = ctx.request

        const dataUsers = fs.readFileSync(path.join(__dirname, '../../data/', 'data.json'));
        const users = JSON.parse(dataUsers)

        const { data } = JSON.parse(body)

        let newUsers = users.map(item => {
            if (item.id === Number(id)) {
                return {
                    ...item,
                    ...data
                }
            }

            return item
        })

        fs.writeFile(path.join(__dirname, '../../data/', 'data.json'), JSON.stringify(newUsers), () => console.log('Write success'))

        ctx.body = 'Ok'
    } catch (e) {
        ctx.body = 'Put Error'
    }
})

module.exports = router.routes()