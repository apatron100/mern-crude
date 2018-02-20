var express = require('express')
var bodyParser = require('body-parser')
var mongoose = require('mongoose')
var routes = require('./routes')
var app = express()
var PORT = process.env.PORT || 5000

// Body parser
app.use(bodyParser.urlencoded({extended: false}))
//parse application/json
app.use(bodyParser.json())

app.use(express.static("client/build"))
app.use(routes)
//mongoose connection
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/mern-crud')
//Routes
//app.get('/', function (req, res) {
//	res.sendFile(path.join(_dirname + 'client/build/index.html'))
//})

app.listen(PORT, function(){
  console.log('Listening on port: ' + PORT);
})
