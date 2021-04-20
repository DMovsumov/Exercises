const env = require('dotenv');
const Koa = require('koa');
const cors = require('@koa/cors')
const router = require('./routes/index')

env.config({path: './.env'})

try {
    const { API_PORT } = process.env;

    const port = parseInt(API_PORT, 10) || 5000;

    const server = new Koa();

    server.use(cors())
    server.use(router.routes())

    server.listen(port, '0.0.0.0', err => {
        if (err) {
            throw err
        }

        console.log(`API server started on ${port}`)
    })

} catch (e) {
    console.log(e)
}