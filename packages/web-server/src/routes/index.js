const productRouter = require('./product')

function route(app){
    app.use('/product',productRouter)
    app.use('/',(req, res, next) => {
        res.send('home')
    })
} 

module.exports = route