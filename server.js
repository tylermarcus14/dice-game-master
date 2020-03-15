var path = require('path');
var webpack = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')
var config = require('./webpack.config.development')
var express = require('express');

var app = new (require('express'))()

var compiler = webpack(config)
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }))
app.use(webpackHotMiddleware(compiler));

// app.use('/react-flip-move/examples', express.static(__dirname))

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
})

app.listen(process.env.PORT || 5000)

