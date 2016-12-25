const path = require('path')
const webpack = require('webpack')
const app = new(require('express'))()
const config = require('./webpack.config')

const compiler = webpack(config)

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}))
app.use(require('webpack-hot-middleware')(compiler))

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'))
})
app.listen(3000, error => {
    if (error) console.log(error)
    else console.log("成功  请访问http://localhost:3000/")
})