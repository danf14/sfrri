const path = require('path')
const express = require('express')


module.exports = {
  app: function () {
    const app = express()
    const indexPath = path.join(__dirname, 'www/index.html')
    //const publicPath = express.static(path.join(__dirname, '../public'))
    const buildPath = express.static(path.join(__dirname, 'build');

    app.use('/www', buildPath)
    app.get('/', function (_, res) { res.sendFile(indexPath) })

    return app
  }
}