const Koa = require('koa')
const app = new Koa()
const nunjucks = require('nunjucks')

const config = require('./config')

app.use(async (ctx, next) => {
    ctx.body = 'Hi Koa2'
})
app.listen(config.port)
console.log(`app is run on port ${config.port}`)
